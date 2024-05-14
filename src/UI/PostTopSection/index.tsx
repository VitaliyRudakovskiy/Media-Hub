'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

import EditPostForm from '@/components/EditPostForm'
import deletePost from '@/firebase/api/deletePost'
import getUserIdByEmail from '@/firebase/api/getUserIdFromEmail'
import convertCreationDate from '@/helpers/convertCreationDate'
import { selectTheme } from '@/store/slices/themeSlice'
import { selectUser } from '@/store/slices/userSlice'
import { PostWithId } from '@/types/postType'

import DynamicAvatar from '../Avatars/DynamicAvatar'
import ConfirmForm from '../ConfirmForm'
import PostBookmark from '../PostBookmark'

import { defineDeleteIcon, defineEditIcon, defineGoToPostIcon } from './helpers'
import * as S from './styled'

const PostTopSection = ({ id, postData }: PostWithId) => {
  const { email, name, createdAt, bookmarks } = postData
  const { email: currentUserEmail } = useSelector(selectUser)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const theme = useSelector(selectTheme)
  const router = useRouter()

  const openPost = () => router.push(`/dashboard/${id}`)
  const handleOpenDeleteModal = () => setIsConfirmModalOpen(true)
  const handleCloseDeleteModal = () => setIsConfirmModalOpen(false)
  const handleOpenEditModal = () => setEditModalOpen(true)
  const handleCloseEditModal = () => setEditModalOpen(false)
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
            <>
              <S.Icon
                src={defineDeleteIcon(theme)}
                alt='remove icon'
                title='Remove the post'
                width={24}
                height={24}
                onClick={handleOpenDeleteModal}
              />
              <S.Icon
                src={defineEditIcon(theme)}
                alt='edit post icon'
                title='Edit post data'
                onClick={handleOpenEditModal}
                width={24}
                height={24}
              />
            </>
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
          closeModal={handleCloseDeleteModal}
          onConfirm={handleDeletePost}
        />
      )}

      {isEditModalOpen && (
        <EditPostForm postId={id} postData={postData} handleClose={handleCloseEditModal} />
      )}
    </>
  )
}

export default PostTopSection
