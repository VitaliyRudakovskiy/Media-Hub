'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'

import { selectUser } from '@/store/slices/userSlice'
import CurrentAvatar from '@/UI/Avatars/CurrentAvatar'
import Button from '@/UI/Button'

import EditPasswordModal from '../EditPasswordModal'
import EditProfileModal from '../EditProfileModal'

import * as S from './styled'

const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const { name, secondName, description, favourites } = useSelector(selectUser)

  const handleOpenProfileModal = () => setIsProfileModalOpen(true)
  const handleCloseProfileModal = () => setIsProfileModalOpen(false)
  const handleOpenPasswordModal = () => setIsPasswordModalOpen(true)
  const handleClosePasswordModal = () => setIsPasswordModalOpen(false)

  return (
    <>
      <S.ProfileWrapper>
        <S.BackgroundColorWrapper />
        <S.ProfileInfo>
          <S.LeftSection>
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
            <S.UserDescriptionContainer>
              {description ? (
                <S.SecondaryText>{description}</S.SecondaryText>
              ) : (
                <S.SecondaryText $withHover onClick={handleOpenProfileModal}>
                  You can add description about yourself here
                </S.SecondaryText>
              )}
              {favourites ? (
                <S.SecondaryText>{favourites}</S.SecondaryText>
              ) : (
                <S.SecondaryText $withHover onClick={handleOpenProfileModal}>
                  You can add your favourite content here
                </S.SecondaryText>
              )}
            </S.UserDescriptionContainer>
          </S.LeftSection>
          <S.ButtonsContainer>
            <Button variant='secondary' onClick={handleOpenProfileModal}>
              Редактировать профиль
            </Button>
            <Button variant='secondary' onClick={handleOpenPasswordModal}>
              Изменить пароль
            </Button>
          </S.ButtonsContainer>
        </S.ProfileInfo>
      </S.ProfileWrapper>

      {isProfileModalOpen && <EditProfileModal onClose={handleCloseProfileModal} />}
      {isPasswordModalOpen && <EditPasswordModal onClose={handleClosePasswordModal} />}
    </>
  )
}

export default Profile
