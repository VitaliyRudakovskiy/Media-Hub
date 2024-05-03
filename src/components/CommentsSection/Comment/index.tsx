'use client'

import { memo, useState } from 'react'
import { useSelector } from 'react-redux'

import deleteComment from '@/firebase/api/deleteComment'
import likeComment from '@/firebase/api/likeComment'
import convertCreationDate from '@/helpers/convertCreationDate'
import defineLikeIcon from '@/helpers/defineLikeIcon'
import isLikedByMe from '@/helpers/isLikedByMe'
import { selectTheme } from '@/store/slices/themeSlice'
import { selectUser } from '@/store/slices/userSlice'
import DynamicAvatar from '@/UI/Avatars/DynamicAvatar'
import ConfirmForm from '@/UI/ConfirmForm'

import * as S from './styled'
import { CommentProps } from './types'

const Comment = ({ id, commentData, postId }: CommentProps) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const { email: currentUserEmail, id: userId } = useSelector(selectUser)
  const theme = useSelector(selectTheme)
  const { createdAt, text, name, email, likedBy } = commentData
  const [isLiked, setIsLiked] = useState(() => isLikedByMe(likedBy, userId))

  const isMyComment = email === currentUserEmail

  const handleOpenModal = () => setIsConfirmModalOpen(true)
  const handleCloseModal = () => setIsConfirmModalOpen(false)
  const handleDeleteComment = () => deleteComment(postId, id)

  const handleLikeTweet = async () => {
    likeComment(id, userId, isLiked)
    setIsLiked(!isLiked)
  }

  return (
    <>
      <S.CommentContainer>
        <DynamicAvatar email={commentData.email} />
        <S.MainContent>
          <S.UserName>{name}</S.UserName>
          <S.CommentText>{text}</S.CommentText>
          <S.BottomContent>
            <S.BottomLeftContent>
              <S.CreatedAt>{convertCreationDate(createdAt)}</S.CreatedAt>
              {isMyComment && <S.DeleteComment onClick={handleOpenModal}>Удалить</S.DeleteComment>}
            </S.BottomLeftContent>
            <S.LikesContainer onClick={handleLikeTweet}>
              <S.LikeImage
                src={defineLikeIcon(isLiked, theme)}
                alt='heart like icon'
                width={15}
                height={15}
              />
              <S.LikesCount>{likedBy.length}</S.LikesCount>
            </S.LikesContainer>
          </S.BottomContent>
        </S.MainContent>
      </S.CommentContainer>
      {isConfirmModalOpen && (
        <ConfirmForm
          subtitle='Вы уверены, что хотите удалить этот комментарий?'
          closeModal={handleCloseModal}
          onConfirm={handleDeleteComment}
        />
      )}
    </>
  )
}

export default memo(Comment)
