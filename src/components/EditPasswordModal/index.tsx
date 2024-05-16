'use client'

import { memo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod'

import { defaultEditPasswordValues, editPasswordElements } from '@/constants/editPasswordElements'
import updatePassword from '@/firebase/api/updatePasswors'
import useOnClickOutside from '@/hooks/useClickOutside'
import { selectTheme } from '@/store/slices/themeSlice'
import Button from '@/UI/Button'
import Input from '@/UI/Input'
import { editPasswordUnhandledErrorToast } from '@/utils/toastManager'
import { editPasswordScheme, EditPasswordSchemeType } from '@/validators/editPasswordScheme'

import * as S from './styled'
import { EditPasswordModalProps } from './types'

const EditProfileModal = ({ onClose }: EditPasswordModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
    setValue,
  } = useForm<EditPasswordSchemeType>({
    resolver: zodResolver(editPasswordScheme),
    defaultValues: defaultEditPasswordValues,
    mode: 'onChange',
  })

  const theme = useSelector(selectTheme)
  const formRef = useRef(null)
  useOnClickOutside(formRef, onClose)

  const onSubmit = async (data: EditPasswordSchemeType) => {
    try {
      await updatePassword(data, theme, onClose, setValue, reset)
    } catch (error) {
      editPasswordUnhandledErrorToast(theme)
    }
  }

  const handleClearForm = () => reset()

  return createPortal(
    <S.ModalOverlay>
      <S.EditProfileForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <S.FormTitle>Изменение пароля</S.FormTitle>
        {editPasswordElements.map(({ placeholder, label, name }) => (
          <S.InputContainer key={name}>
            <S.InputLabel>{label}</S.InputLabel>
            <S.ErrorContainer>
              <Input
                {...register(name)}
                placeholder={placeholder}
                type={name === 'email' ? 'text' : 'password'}
              />
              {errors && errors[name] && <S.Error>{errors[name]?.message}</S.Error>}
            </S.ErrorContainer>
          </S.InputContainer>
        ))}
        <S.CloseButton type='button' onClick={onClose}>
          &times;
        </S.CloseButton>
        <S.ButtonsContainer>
          <Button type='submit' variant='primary' disabled={!isValid || isSubmitting}>
            {isSubmitting ? 'Loading...' : 'Сохранить изменения'}
          </Button>
          <Button variant='secondary' onClick={handleClearForm}>
            Очистить форму
          </Button>
        </S.ButtonsContainer>
      </S.EditProfileForm>
    </S.ModalOverlay>,

    document.body
  )
}

export default memo(EditProfileModal)
