'use client'

import { memo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod'

import { editProfileElements } from '@/constants/editProfileElements'
import updateProfile from '@/firebase/api/updateProfile'
import useOnClickOutside from '@/hooks/useClickOutside'
import { useAppDispatch } from '@/store/hooks'
import { selectTheme } from '@/store/slices/themeSlice'
import { selectUser } from '@/store/slices/userSlice'
import { FileType } from '@/types/fileType'
import Button from '@/UI/Button'
import Input from '@/UI/Input'
import { editProfileErrorToast } from '@/utils/toastManager'
import { editProfileScheme, EditProfileSchemeType } from '@/validators/editProfileScheme'

import EditAvatar from './EditAvatar'
import * as S from './styled'
import { EditProfileModalProps } from './types'

const EditProfileModal = ({ onClose }: EditProfileModalProps) => {
  const [file, setFile] = useState<FileType | null>(null)
  const [fileRemovedTrigger, setFileRemovedTrigger] = useState(false)
  const [fileName, setFileName] = useState('')
  const user = useSelector(selectUser)
  const theme = useSelector(selectTheme)
  const dispatch = useAppDispatch()

  const editProfileDefaultValues = {
    name: user.name,
    secondName: user.secondName,
    description: user.description,
    favourites: user.favourites,
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<EditProfileSchemeType>({
    resolver: zodResolver(editProfileScheme),
    defaultValues: editProfileDefaultValues,
    mode: 'onChange',
  })

  const formRef = useRef(null)
  useOnClickOutside(formRef, onClose)

  const onSubmit = async (newData: Partial<EditProfileSchemeType>) => {
    const updatedValues: Partial<EditProfileSchemeType> = {}

    updatedValues.name = newData.name
    updatedValues.secondName = newData.secondName
    if (newData.description !== editProfileDefaultValues.description)
      updatedValues.description = newData.description
    if (newData.favourites !== editProfileDefaultValues.favourites)
      updatedValues.favourites = newData.favourites

    try {
      await updateProfile(
        user.id,
        updatedValues,
        file,
        fileRemovedTrigger,
        editProfileDefaultValues.name,
        editProfileDefaultValues.secondName,
        user.email,
        dispatch,
        theme
      )
    } catch (error) {
      editProfileErrorToast(theme)
    } finally {
      onClose()
    }
  }

  return createPortal(
    <S.ModalOverlay>
      <S.EditProfileForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <S.FormTitle>Updating profile</S.FormTitle>
        <EditAvatar
          setFile={setFile}
          fileName={fileName}
          setFileName={setFileName}
          fileRemovedTrigger={fileRemovedTrigger}
          setFileRemovedTrigger={setFileRemovedTrigger}
        />
        {editProfileElements.map(({ placeholder, label, name }) => (
          <S.InputContainer key={name}>
            <S.InputLabel>{label}</S.InputLabel>
            <S.ErrorContainer>
              <Input {...register(name)} placeholder={placeholder} />
              {errors && errors[name] && <S.Error>{errors[name]?.message}</S.Error>}
            </S.ErrorContainer>
          </S.InputContainer>
        ))}
        <S.CloseButton type='button' onClick={onClose}>
          &times;
        </S.CloseButton>
        <Button
          type='submit'
          variant='primary'
          disabled={!isValid || isSubmitting || (!isDirty && !file && !fileRemovedTrigger)}
        >
          {isSubmitting ? 'Loading...' : 'Save changes'}
        </Button>
      </S.EditProfileForm>
    </S.ModalOverlay>,

    document.body
  )
}

export default memo(EditProfileModal)
