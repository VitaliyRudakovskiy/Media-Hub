'use client';

import { memo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';

import { editProfileElements } from '@/constants/editProfileElements';
import updateProfile from '@/firebase/api/updateProfile';
import useOnClickOutside from '@/hooks/useClickOutside';
import { useAppDispatch } from '@/store/hooks';
import { selectUser } from '@/store/slices/userSlice';
import { EditProfileType } from '@/types/editProfileElements';
import { FileType } from '@/types/fileType';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import { editProfileScheme } from '@/validators/editProfileScheme';

import EditAvatar from './EditAvatar';
import * as S from './styled';
import { EditProfileModalProps } from './types';

const EditProfileModal = ({ onClose }: EditProfileModalProps) => {
  const [file, setFile] = useState<FileType | null>(null);
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const editProfileDefaultValues = {
    name: user.name,
    secondName: user.secondName,
    description: user.description,
    favourites: user.favourites,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(editProfileScheme),
    defaultValues: editProfileDefaultValues,
    mode: 'onChange',
  });

  const formRef = useRef(null);
  useOnClickOutside(formRef, onClose);

  const onSubmit = async (newData: Partial<EditProfileType>) => {
    try {
      await updateProfile(user.id, newData, file, dispatch);
    } catch (error) {
      throw Error(`An error occured while changing profile data: ${error}`);
    } finally {
      onClose();
    }
  };

  return createPortal(
    <S.ModalOverlay>
      <S.EditProfileForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <S.FormTitle>Редактирование профиля</S.FormTitle>
        <EditAvatar setFile={setFile} />
        {editProfileElements.map(({ placeholder, name }) => (
          <S.InputContainer key={name}>
            <p>{name}</p>
            <S.ErrorContainer>
              <Input {...register(name)} placeholder={placeholder} />
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
