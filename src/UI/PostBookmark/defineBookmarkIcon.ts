import BookmarkFillBlack from '@/assets/icons/bookmarks/bookmark-fill-black.svg'
import BookmarkFillWhite from '@/assets/icons/bookmarks/bookmark-fill-white.svg'
import BookmarkOutlineBlack from '@/assets/icons/bookmarks/bookmark-outline-black.svg'
import BookmarkOutlineWhite from '@/assets/icons/bookmarks/bookmark-outline-white.svg'

const defineBookmarkIcon = (isBookmarked: boolean, theme: 'dark' | 'light') => {
  if (isBookmarked && theme === 'light') return BookmarkFillBlack
  if (isBookmarked && theme === 'dark') return BookmarkFillWhite
  if (theme === 'light') return BookmarkOutlineBlack
  return BookmarkOutlineWhite
}

export default defineBookmarkIcon
