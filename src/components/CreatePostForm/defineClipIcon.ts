import ClipBlack from '@/assets/icons/clips/clip-black.svg'
import ClipWhite from '@/assets/icons/clips/clip-white.svg'

const defineClipIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return ClipBlack
  return ClipWhite
}

export default defineClipIcon
