'use client'

import { memo, useState } from 'react'
import { useSelector } from 'react-redux'

import bookmarkPost from '@/firebase/api/bookmarkPost'
import defineBookmarkIcon from '@/helpers/defineBookmarkIcon'
import isBookmarkedByMe from '@/helpers/isBookmarkedByMe'
import { selectTheme } from '@/store/slices/themeSlice'
import { selectUser } from '@/store/slices/userSlice'

import { BookmarkIcon } from './styled'
import { PostBookmarkProps } from './types'

const PostBookmark = ({ id, bookmarks }: PostBookmarkProps) => {
  const { id: userId } = useSelector(selectUser)
  const theme = useSelector(selectTheme)
  const [isBookmarked, setIsBookmarked] = useState(() => isBookmarkedByMe(bookmarks, userId))

  const handleBookmarkPost = async () => {
    bookmarkPost(id, userId, isBookmarked)
    setIsBookmarked(!isBookmarked)
  }

  return (
    <BookmarkIcon
      src={defineBookmarkIcon(isBookmarked, theme)}
      alt='bookmark icon'
      onClick={handleBookmarkPost}
      width={20}
      height={20}
    />
  )
}

export default memo(PostBookmark)
