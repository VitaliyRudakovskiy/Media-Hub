import { UserType } from '@/types/user'

export type AvatarProps = {
  width?: number
  height?: number
  initialsFontSize?: string
  isBordered?: boolean
  unoptimized?: boolean
}

export type DynamicAvatarProps = AvatarProps & { email: string }

export type DynamicUserType = Pick<UserType, 'name' | 'secondName' | 'avatarName'>

export type StyledAvatarContainerProps = {
  $width: number
  $height: number
}

export type StyledAvatarProps = {
  $isBordered: boolean
}

export type StyledInitialsProps = {
  $initialsFontSize: string
}
