'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Logo from '@/assets/images/logo.webp'
import ROUTES from '@/constants/routes'
import ThemeToggler from '@/UI/ThemeToggler'

import CurrentAvatar from '../Avatars/CurrentAvatar'
import LocaleSwitcher from '../LocaleSwitcher'
import LogoutButton from '../LogoutButton'

import { AvatarContainer, HeaderWrapper, LeftPart, RightPart, StyledImage } from './styled'

const Header = () => {
  const [opacity, setOpacity] = useState(1)
  const router = useRouter()

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > 40) setOpacity(0.8)
    else setOpacity(1)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goToProfile = () => router.push(ROUTES.PROFILE)

  return (
    <HeaderWrapper
      $opacity={opacity}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={handleScroll}
    >
      <LeftPart>
        <StyledImage
          src={Logo}
          alt='site logo'
          width={60}
          height={60}
          unoptimized
          quality={100}
          priority
        />
        <h1>Media Hub</h1>
      </LeftPart>
      <RightPart>
        <AvatarContainer onClick={goToProfile}>
          <CurrentAvatar width={50} height={50} initialsFontSize='18px' />
        </AvatarContainer>
        <LogoutButton />
        <LocaleSwitcher />
        <ThemeToggler />
      </RightPart>
    </HeaderWrapper>
  )
}

export default Header
