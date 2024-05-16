'use client'

import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'

import Star from '@/assets/icons/star.webp'
import CommentsSection from '@/components/CommentsSection'
import NewComment from '@/components/NewComment'
import usePhotosFromFirestore from '@/hooks/usePhotosFromFirestore'
import { selectTheme } from '@/store/slices/themeSlice'
import { PostWithId } from '@/types/postType'
import PostLikes from '@/UI/PostLikes'
import PostReaction from '@/UI/PostReaction'
import PostViews from '@/UI/PostViews'

import PostCategory from '../PostCategory'
import PostTags from '../PostTags'
import PostText from '../PostText'
import PostTopSection from '../PostTopSection'

import { defineCommentIcon } from './helpers'
import * as S from './styled'

const Post = ({ id, postData }: PostWithId) => {
  const { title, feedback, category, rating, tags, files, likedBy, comments, visibility } = postData

  const [areCommentsVisible, setCommentsVisible] = useState(false)
  const theme = useSelector(selectTheme)
  const fileLinks = usePhotosFromFirestore(files)

  const handleToggleComments = () => setCommentsVisible((prevVisible) => !prevVisible)

  return (
    <>
      <S.PostWrapper>
        <PostTopSection id={id} postData={postData} />
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
          <PostText feedback={feedback} />
          {fileLinks && fileLinks.length > 0 && (
            <S.ImageSection $filesLength={fileLinks?.length}>
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
    </>
  )
}

export default memo(Post)
