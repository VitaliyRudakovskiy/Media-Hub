'use client'

import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import useOnClickOutside from '@/hooks/useClickOutside'
import Button from '@/UI/Button'
import { deletePostSuccessToast } from '@/utils/toastManager'

import * as S from './styled'
import { ConfirmFormProps } from './types'

const ConfirmForm = ({
  title = 'Подтверждение удаления',
  subtitle = 'Вы уверены, что хотите удалить этот пост?',
  confirmText = 'Удалить',
  cancelText = 'Отменить удаление',
  theme,
  notificationText = 'Your post was successfully deleted!',
  closeModal,
  onConfirm,
}: ConfirmFormProps) => {
  const [loading, setLoading] = useState(false)
  const modalRef = useRef(null)
  useOnClickOutside(modalRef, closeModal)

  const handleDelete = async () => {
    setLoading(true)
    await onConfirm()
    setLoading(false)
    deletePostSuccessToast(theme, notificationText)
  }

  return createPortal(
    <S.ModalOverlay>
      <S.ModalContainer ref={modalRef}>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalSubtitle>{subtitle}</S.ModalSubtitle>
        <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>
        <S.ButtonsContainer>
          <Button variant='secondary' onClick={closeModal}>
            {cancelText}
          </Button>
          <S.ConfirmButton onClick={handleDelete} disabled={loading}>
            {loading ? 'Deleting...' : confirmText}
          </S.ConfirmButton>
        </S.ButtonsContainer>
      </S.ModalContainer>
    </S.ModalOverlay>,

    document.body
  )
}

export default ConfirmForm
