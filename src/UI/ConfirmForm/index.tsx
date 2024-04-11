'use client';

import { useRef } from 'react';
import { createPortal } from 'react-dom';

import useOnClickOutside from '@/hooks/useClickOutside';
import Button from '@/UI/Button';

import * as S from './styled';
import { ConfirmFormProps } from './types';

const ConfirmForm = ({
  title = 'Подтверждение удаления',
  subtitle = 'Вы уверены, что хотите удалить этот пост?',
  confirmText = 'Удалить',
  cancelText = 'Отменить удаление',
  closeModal,
  onConfirm,
}: ConfirmFormProps) => {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, closeModal);

  return createPortal(
    <S.ModalOverlay>
      <S.ModalContainer ref={modalRef}>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalSubtitle>{subtitle}</S.ModalSubtitle>
        <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>
        <S.ButtonsContainer>
          <S.ConfirmButton onClick={onConfirm}>{confirmText}</S.ConfirmButton>
          <Button variant='secondary' onClick={closeModal}>
            {cancelText}
          </Button>
        </S.ButtonsContainer>
      </S.ModalContainer>
    </S.ModalOverlay>,

    document.body
  );
};

export default ConfirmForm;
