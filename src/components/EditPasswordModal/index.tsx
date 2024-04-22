'use client';

import { memo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { defaultEditPasswordValues, editPasswordElements } from '@/constants/editPasswordElements';
import updatePassword from '@/firebase/api/updatePasswors';
import useOnClickOutside from '@/hooks/useClickOutside';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import { editPasswordScheme, EditPasswordSchemeType } from '@/validators/editPasswordScheme';

import * as S from './styled';
import { EditPasswordModalProps } from './types';

const EditProfileModal = ({ onClose }: EditPasswordModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<EditPasswordSchemeType>({
    resolver: zodResolver(editPasswordScheme),
    defaultValues: defaultEditPasswordValues,
    mode: 'onChange',
  });

  const formRef = useRef(null);
  useOnClickOutside(formRef, onClose);

  const onSubmit = async (data: EditPasswordSchemeType) => {
    try {
      await updatePassword(data);
    } catch (error) {
      throw new Error(`An error occured while changing password: ${error}`);
    } finally {
      reset();
      onClose();
    }
  };

  return createPortal(
    <S.ModalOverlay>
      <S.EditProfileForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <S.FormTitle>Изменение пароля</S.FormTitle>
        {editPasswordElements.map(({ placeholder, name }) => (
          <S.InputContainer key={name}>
            <p>{name}</p>
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
        <Button type='submit' variant='primary' disabled={!isValid}>
          Сохранить изменения
        </Button>
      </S.EditProfileForm>
    </S.ModalOverlay>,

    document.body
  );
};

export default memo(EditProfileModal);
