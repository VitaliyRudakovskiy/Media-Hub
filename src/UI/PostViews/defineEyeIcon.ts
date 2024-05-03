import EyeBlack from '@/assets/icons/eyes/eye-cross-black.svg'
import EyeWhite from '@/assets/icons/eyes/eye-cross-white.svg'

const defineEyeIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return EyeBlack
  return EyeWhite
}

export default defineEyeIcon
