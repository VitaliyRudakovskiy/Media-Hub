'use client'

import { memo } from 'react'
import { useSelector } from 'react-redux'

import usePhoto from '@/hooks/usePhoto'
import { selectUser } from '@/store/slices/userSlice'

import { AvatarContainer, AvatarPhoto, Initials } from '../styled'
import { AvatarProps } from '../types'

const CurrentAvatar = ({
  width = 35,
  height = 35,
  initialsFontSize = '14px',
  isBordered = false,
  unoptimized = false,
}: AvatarProps) => {
  const { avatarName, name, secondName } = useSelector(selectUser)
  const avatarURL = usePhoto(avatarName)
  const initials = `${name[0]?.toUpperCase()}${secondName[0]?.toUpperCase()}`

  return (
    <AvatarContainer $width={width} $height={height}>
      {avatarURL ? (
        <AvatarPhoto
          src={avatarURL}
          alt='User avatar'
          width={width}
          height={height}
          $isBordered={isBordered}
          unoptimized={unoptimized}
        />
      ) : (
        <Initials $initialsFontSize={initialsFontSize}>{initials}</Initials>
      )}
    </AvatarContainer>
  )
}

export default memo(CurrentAvatar)
