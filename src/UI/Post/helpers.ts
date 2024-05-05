import CommentBlack from '@/assets/icons/comments/comment-black.svg'
import CommentWhite from '@/assets/icons/comments/comment-white.svg'

export const defineCommentIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return CommentBlack
  return CommentWhite
}
