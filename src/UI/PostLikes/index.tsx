'use client'

import { memo, useState } from 'react'
import { useSelector } from 'react-redux'

import likePost from '@/firebase/api/likePost'
import defineLikeIcon from '@/helpers/defineLikeIcon'
import isLikedByMe from '@/helpers/isLikedByMe'
import { selectTheme } from '@/store/slices/themeSlice'
import { selectUser } from '@/store/slices/userSlice'

import { Count, LikesContainer, LikesImage } from './styled'
import { PostLikesProps } from './types'

const PostLikes = ({ id, likedBy }: PostLikesProps) => {
  const { id: userId } = useSelector(selectUser)
  const theme = useSelector(selectTheme)
  const [isLiked, setIsLiked] = useState(() => isLikedByMe(likedBy, userId))

  const handleLikeTweet = async () => {
    likePost(id, userId, isLiked)
    setIsLiked(!isLiked)
  }

  return (
    <LikesContainer onClick={handleLikeTweet}>
      <LikesImage src={defineLikeIcon(isLiked, theme)} alt='like heart' width={20} height={20} />
      {likedBy.length !== 0 && <Count>{likedBy.length}</Count>}
    </LikesContainer>
  )
}

export default memo(PostLikes)
