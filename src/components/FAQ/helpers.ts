import ChevronBlack from '@/assets/icons/chevron/chevron-black.svg'
import ChevronWhite from '@/assets/icons/chevron/chevron-white.svg'

export const defineChevronIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return ChevronBlack
  return ChevronWhite
}
