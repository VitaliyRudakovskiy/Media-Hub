'use client'

import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Star from '@/assets/icons/star.webp'
import CommentsSection from '@/components/CommentsSection'
import NewComment from '@/components/NewComment'
import deletePost from '@/firebase/api/deletePost'
import getUserIdByEmail from '@/firebase/api/getUserIdFromEmail'
import convertCreationDate from '@/helpers/convertCreationDate'
import usePhotosFromFirestore from '@/hooks/usePhotosFromFirestore'
import { selectTheme } from '@/store/slices/themeSlice'
import { selectUser } from '@/store/slices/userSlice'
import { PostWithId } from '@/types/postType'
import ConfirmForm from '@/UI/ConfirmForm'
import PostBookmark from '@/UI/PostBookmark'
import PostLikes from '@/UI/PostLikes'
import PostReaction from '@/UI/PostReaction'
import PostViews from '@/UI/PostViews'

import DynamicAvatar from '../Avatars/DynamicAvatar'
import PostCategory from '../PostCategory'
import PostTags from '../PostTags'
import PostText from '../PostText'

import { defineCommentIcon, defineDeleteIcon, defineGoToPostIcon } from './helpers'
import * as S from './styled'

const Post = ({ id, postData }: PostWithId) => {
  const {
    createdAt,
    title,
    feedback,
    category,
    rating,
    tags,
    email,
    name,
    files,
    likedBy,
    bookmarks,
    comments,
    visibility,
  } = postData

  const { email: currentUserEmail } = useSelector(selectUser)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [areCommentsVisible, setAreCommentsVisible] = useState(false)
  const router = useRouter()
  const theme = useSelector(selectTheme)

  const fileLinks = usePhotosFromFirestore(files)

  const openPost = () => router.push(`/dashboard/${id}`)
  const handleOpenModal = () => setIsConfirmModalOpen(true)
  const handleCloseModal = () => setIsConfirmModalOpen(false)
  const handleDeletePost = () => deletePost(id)
  const handleToggleComments = () => setAreCommentsVisible((prevVisible) => !prevVisible)

  const handleUserNameClick = async () => {
    const userId = await getUserIdByEmail(email)
    router.push(`/friends/${userId}`)
  }

  return (
    <>
      <S.PostWrapper>
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
        <S.MainSection>
          <S.Title>{title}</S.Title>
          <S.InfoContainer>
            <S.RatingContainer>
              <S.Rating>{rating}</S.Rating>
              <Image src={Star} alt='rating star' width={22} height={22} />
            </S.RatingContainer>
            <PostCategory category={category} />
          </S.InfoContainer>
          <PostTags tags={tags} />
          <PostText postId={id} feedback={feedback} />
          {fileLinks && fileLinks.length > 0 && (
            <S.ImageSection>
              {fileLinks.map((file) => (
                <S.SingleImage key={file} src={file} alt={`post image ${file}`} />
              ))}
            </S.ImageSection>
          )}
        </S.MainSection>
        <S.NumbersSection>
          <S.ReactionsSection>
            <PostLikes id={id} likedBy={likedBy} />
            <PostReaction
              icon={defineCommentIcon(theme)}
              reactionsCount={comments.length}
              onClick={handleToggleComments}
            />
          </S.ReactionsSection>
          <PostViews visibility={visibility} />
        </S.NumbersSection>

        {areCommentsVisible && (
          <>
            <CommentsSection commentsIds={comments} postId={id} />
            <NewComment postId={id} />
          </>
        )}
      </S.PostWrapper>

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

export default memo(Post)
