import { StaticImageData } from 'next/image'

export type PostReactionType = {
  reactionsCount: number
  icon: StaticImageData
  onClick?: () => void
}

export type StyledProps = {
  $count: number
}
