import ArrowLight from '@/assets/icons/arrows/arrow-down.svg'
import ArrowDark from '@/assets/icons/arrows/arrow-down-dark.svg'

const defineArrowIcon = (theme: 'dark' | 'light') => {
  return theme === 'light' ? ArrowLight : ArrowDark
}

export default defineArrowIcon
