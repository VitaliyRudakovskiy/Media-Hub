'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import Background from '@/assets/images/profileBackground.jpg';
import { selectUser } from '@/store/slices/userSlice';
import Avatar from '@/UI/Avatar';
import Button from '@/UI/Button';

import EditProfileModal from '../EditProfileModal';

import * as S from './styled';

const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { name, secondName } = useSelector(selectUser);

  const handleOpenProfileModal = () => setIsProfileModalOpen(true);
  const handleCloseProfileModal = () => setIsProfileModalOpen(false);

  return (
    <>
      <S.ProfileWrapper>
        <S.BackgroundImageWrapper>
          <S.BackgroundImage src={Background} alt='profile background picture' />
        </S.BackgroundImageWrapper>
        <S.ProfileInfo>
          <S.AvatarContainer>
            <Avatar width={150} height={150} isBordered unoptimized initialsFontSize='62px' />
          </S.AvatarContainer>
          <S.Username>
            {name} {secondName}
          </S.Username>
          <Button variant='secondary' onClick={handleOpenProfileModal}>
            Редактировать профиль
          </Button>
          <Button variant='secondary'>Редактировать параметры входа</Button>
        </S.ProfileInfo>
      </S.ProfileWrapper>
      {isProfileModalOpen && <EditProfileModal onClose={handleCloseProfileModal} />}
    </>
  );
};

export default Profile;
