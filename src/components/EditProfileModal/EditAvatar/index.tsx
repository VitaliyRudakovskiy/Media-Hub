'use client';

import React, { ChangeEvent } from 'react';

import CurrentAvatar from '@/UI/Avatars/CurrentAvatar';
import Button from '@/UI/Button';

import * as S from './styled';
import { EditAvatarProps } from './types';

const EditAvatar = ({ setFile }: EditAvatarProps) => {
  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    setFile(e.target.files[0]);
  };

  return (
    <S.EditAvatarContainer>
      <CurrentAvatar width={150} height={150} initialsFontSize='62px' />
      <Button variant='primary'>
        <S.UploadFileLabel>
          Update photo
          <S.InputForFile
            type='file'
            accept='.png, .jpg, .jpeg, .webp'
            onChange={handleUploadFile}
          />
        </S.UploadFileLabel>
      </Button>
    </S.EditAvatarContainer>
  );
};

export default EditAvatar;
