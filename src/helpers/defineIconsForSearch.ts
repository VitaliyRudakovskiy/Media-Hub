import CrossBlack from '@/assets/icons/cross/cross-black.svg'
import CrossWhite from '@/assets/icons/cross/cross-white.svg'
import SearchBlack from '@/assets/icons/search/search-black.svg'
import SearchWhite from '@/assets/icons/search/search-white.svg'

export const defineCrossIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return CrossBlack
  return CrossWhite
}

export const defineSearchIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return SearchBlack
  return SearchWhite
}
