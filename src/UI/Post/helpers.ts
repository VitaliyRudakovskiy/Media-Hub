import CommentBlack from '@/assets/icons/comments/comment-black.svg'
import CommentWhite from '@/assets/icons/comments/comment-white.svg'
import DeleteBlack from '@/assets/icons/delete/delete-black.svg'
import DeleteWhite from '@/assets/icons/delete/delete-white.svg'
import GoToPostBlack from '@/assets/icons/goToPost/go-to-post-black.svg'
import GoToPostWhite from '@/assets/icons/goToPost/go-to-post-white.svg'

export const defineCommentIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return CommentBlack
  return CommentWhite
}

export const defineDeleteIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return DeleteBlack
  return DeleteWhite
}

export const defineGoToPostIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return GoToPostBlack
  return GoToPostWhite
}
