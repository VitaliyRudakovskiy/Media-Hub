'use client'

import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'

import { selectUser } from '@/store/slices/userSlice'
import CurrentAvatar from '@/UI/Avatars/CurrentAvatar'
import Button from '@/UI/Button'

import * as S from './styled'
import { EditAvatarProps } from './types'

const EditAvatar = ({
  setFile,
  fileName,
  setFileName,
  fileRemovedTrigger,
  setFileRemovedTrigger,
}: EditAvatarProps) => {
  const { avatarName } = useSelector(selectUser)

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
  }

  const handleDeleteNewPhoto = () => {
    setFile(null)
    setFileName('')
  }

  const handleDeleteOldPhoto = () => setFileRemovedTrigger(true)

  return (
    <S.EditAvatarContainer>
      <CurrentAvatar width={100} height={100} initialsFontSize='42px' />
      <S.ButtonsContainer>
        <Button variant='secondary'>
          <S.UploadFileLabel>
            Update photo
            <S.InputForFile
              type='file'
              accept='.png, .jpg, .jpeg, .webp'
              onChange={handleUploadFile}
            />
          </S.UploadFileLabel>
        </Button>
        {fileName && (
          <S.FileContainer>
            <S.FileName>{fileName}</S.FileName>
            <S.RemoveButton type='button' onClick={handleDeleteNewPhoto}>
              &times;
            </S.RemoveButton>
          </S.FileContainer>
        )}
        {avatarName && (
          <>
            <Button variant='secondary' onClick={handleDeleteOldPhoto}>
              Delete my photo
            </Button>
          </>
        )}
        {fileRemovedTrigger && <p>Your photo will be deleted</p>}
      </S.ButtonsContainer>
    </S.EditAvatarContainer>
  )
}

export default EditAvatar
