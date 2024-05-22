'use client'

import { memo, useEffect, useState } from 'react'

import getUserByEmail from '@/firebase/api/getUserByEmail'
import getPhotoURL from '@/helpers/getPhotoUrl'

import { AvatarContainer, AvatarPhoto, Initials } from '../styled'
import { DynamicAvatarProps, DynamicUserType } from '../types'

const DynamicAvatar = ({
  email,
  width = 35,
  height = 35,
  initialsFontSize = '14px',
  isBordered = false,
  unoptimized = false,
}: DynamicAvatarProps) => {
  const [user, setUser] = useState<DynamicUserType | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserByEmail(email)
      if (user) {
        const { name, secondName, avatarName } = user
        const avatarUrl = await getPhotoURL(avatarName)
        setUser({ name, secondName, avatarName: avatarUrl })
      }
    }
    fetchUser()
  }, [email])

  const initials = user && `${user.name[0]?.toUpperCase()}${user.secondName[0]?.toUpperCase()}`

  return (
    <AvatarContainer $width={width} $height={height}>
      {user && user.avatarName ? (
        <AvatarPhoto
          src={user.avatarName}
          alt='User avatar'
          title={`${user.name} ${user.secondName}`}
          width={width}
          height={height}
          unoptimized={unoptimized}
          $isBordered={isBordered}
        />
      ) : (
        <Initials $initialsFontSize={initialsFontSize}>{initials}</Initials>
      )}
    </AvatarContainer>
  )
}

export default memo(DynamicAvatar)
