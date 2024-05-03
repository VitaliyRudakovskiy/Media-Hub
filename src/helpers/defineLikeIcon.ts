import LikeFill from '@/assets/icons/likes/like-fill-red.svg'
import LikeOutlineBlack from '@/assets/icons/likes/like-outline-black.svg'
import LikeOutlineWhite from '@/assets/icons/likes/like-outline-white.svg'

const defineLikeIcon = (isLiked: boolean, theme: 'dark' | 'light') => {
  if (isLiked) return LikeFill
  if (theme === 'light') return LikeOutlineBlack
  return LikeOutlineWhite
}

export default defineLikeIcon
