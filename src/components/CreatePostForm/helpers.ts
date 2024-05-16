import ClipBlack from '@/assets/icons/clips/clip-black.svg'
import ClipWhite from '@/assets/icons/clips/clip-white.svg'
import SwapBlack from '@/assets/icons/swap/swap-black.svg'
import SwapWhite from '@/assets/icons/swap/swap-white.svg'

export const defineClipIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return ClipBlack
  return ClipWhite
}

export const defineSwapIcon = (theme: 'dark' | 'light') => {
  if (theme === 'light') return SwapBlack
  return SwapWhite
}
