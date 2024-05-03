import SubmitBlack from '@/assets/icons/submitComment/submit-comment-black.svg'
import SubmitWhite from '@/assets/icons/submitComment/submit-comment-white.svg'

const defineSubmitIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return SubmitBlack
  return SubmitWhite
}

export default defineSubmitIcon
