'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

import deletePost from '@/firebase/api/deletePost'
import getUserIdByEmail from '@/firebase/api/getUserIdFromEmail'
import convertCreationDate from '@/helpers/convertCreationDate'
import { selectTheme } from '@/store/slices/themeSlice'
import { selectUser } from '@/store/slices/userSlice'

import DynamicAvatar from '../Avatars/DynamicAvatar'
import ConfirmForm from '../ConfirmForm'
import PostBookmark from '../PostBookmark'

import { defineDeleteIcon, defineGoToPostIcon } from './helpers'
import * as S from './styled'
import { PostTopSectionProps } from './types'

const PostTopSection = ({ id, email, name, createdAt, bookmarks }: PostTopSectionProps) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const router = useRouter()
  const { email: currentUserEmail } = useSelector(selectUser)
  const theme = useSelector(selectTheme)

  const openPost = () => router.push(`/dashboard/${id}`)
  const handleOpenModal = () => setIsConfirmModalOpen(true)
  const handleCloseModal = () => setIsConfirmModalOpen(false)
  const handleDeletePost = () => deletePost(id)

  const handleUserNameClick = async () => {
    const userId = await getUserIdByEmail(email)
    router.push(`/friends/${userId}`)
  }

  return (
    <>
      <S.TopSection>
        <S.UserSection>
          <S.AvatarContainer>
            <DynamicAvatar email={email} width={50} height={50} initialsFontSize='20px' />
          </S.AvatarContainer>
          <S.PostInfo>
            <S.UserName onClick={handleUserNameClick}>{name}</S.UserName>
            <S.Date>{convertCreationDate(createdAt)}</S.Date>
          </S.PostInfo>
        </S.UserSection>
        <S.TopIconsSection>
          <PostBookmark id={id} bookmarks={bookmarks} />
          {currentUserEmail === email && (
            <S.Icon
              src={defineDeleteIcon(theme)}
              alt='remove icon'
              title='Remove the post'
              width={24}
              height={24}
              onClick={handleOpenModal}
            />
          )}
          <S.Icon
            src={defineGoToPostIcon(theme)}
            alt='go to post icon'
            title='Go to the post'
            onClick={openPost}
            width={24}
            height={24}
          />
        </S.TopIconsSection>
      </S.TopSection>

      {isConfirmModalOpen && (
        <ConfirmForm
          subtitle='Вы уверены, что хотите удалить этот пост?'
          closeModal={handleCloseModal}
          onConfirm={handleDeletePost}
        />
      )}
    </>
  )
}

export default PostTopSection
