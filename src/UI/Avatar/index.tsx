'use client';

import { memo } from 'react';
import { useSelector } from 'react-redux';

import usePhoto from '@/hooks/usePhoto';
import { selectUser } from '@/store/slices/userSlice';

import { AvatarContainer, AvatarPhoto, Initials } from './styled';
import { AvatarProps } from './types';

const Avatar = ({
  width = 35,
  height = 35,
  initialsFontSize = '14px',
  isBordered = false,
  unoptimized = false,
}: AvatarProps) => {
  const { avatarName, name, secondName } = useSelector(selectUser);
  const avatarUrl = usePhoto(avatarName);
  const initials = `${name[0].toUpperCase()}${secondName[0].toUpperCase()}`;

  // ! Нужно переделать этот компонент
  // TODO: Нужно передавать как проп imageName того аккаунта, которому нужно вернуть фотку
  // ? На данный момент он получает только фотку текущего пользователя, а иногда нужно фотка другого пользователя
  // ? В компонентах Post, Comment, и еще пересмотреть

  return (
    <AvatarContainer $width={width} $height={height}>
      {avatarUrl ? (
        <AvatarPhoto
          src={avatarUrl}
          alt='User avatar'
          width={width}
          height={height}
          $isBordered={isBordered}
          unoptimized={unoptimized}
        />
      ) : (
        <Initials $initialsFontSize={initialsFontSize}>{initials}</Initials>
      )}
    </AvatarContainer>
  );
};

export default memo(Avatar);
