'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import Background from '@/assets/images/profileBackground.jpg';
import { selectUser } from '@/store/slices/userSlice';
import CurrentAvatar from '@/UI/Avatars/CurrentAvatar';
import Button from '@/UI/Button';

import EditPasswordModal from '../EditPasswordModal';
import EditProfileModal from '../EditProfileModal';

import * as S from './styled';

const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const { name, secondName } = useSelector(selectUser);

  const handleOpenProfileModal = () => setIsProfileModalOpen(true);
  const handleCloseProfileModal = () => setIsProfileModalOpen(false);
  const handleOpenPasswordModal = () => setIsPasswordModalOpen(true);
  const handleClosePasswordModal = () => setIsPasswordModalOpen(false);

  return (
    <>
      <S.ProfileWrapper>
        <S.BackgroundImageWrapper>
          <S.BackgroundImage src={Background} alt='profile background picture' />
        </S.BackgroundImageWrapper>
        <S.ProfileInfo>
          <S.AvatarContainer>
            <CurrentAvatar
              width={150}
              height={150}
              isBordered
              unoptimized
              initialsFontSize='62px'
            />
          </S.AvatarContainer>
          <S.Username>
            {name} {secondName}
          </S.Username>
          <Button variant='secondary' onClick={handleOpenProfileModal}>
            Редактировать профиль
          </Button>
          <Button variant='secondary' onClick={handleOpenPasswordModal}>
            Изменить пароль
          </Button>
        </S.ProfileInfo>
      </S.ProfileWrapper>

      {isProfileModalOpen && <EditProfileModal onClose={handleCloseProfileModal} />}
      {isPasswordModalOpen && <EditPasswordModal onClose={handleClosePasswordModal} />}
    </>
  );
};

export default Profile;
