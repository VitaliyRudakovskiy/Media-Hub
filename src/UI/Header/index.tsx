'use client'

import Logo from '@/assets/images/logo.png'
import ThemeToggler from '@/UI/ThemeToggler'

import LocaleSwitcher from '../LocaleSwitcher'
import LogoutButton from '../LogoutButton'

import { HeaderWrapper, LeftPart, RightPart, StyledImage } from './styled'

const Header = () => {
  return (
    <HeaderWrapper>
      <LeftPart>
        <StyledImage src={Logo} alt='site logo' unoptimized />
        <h1>Media Hub</h1>
      </LeftPart>
      <RightPart>
        <LocaleSwitcher />
        <LogoutButton />
        <ThemeToggler />
      </RightPart>
    </HeaderWrapper>
  )
}

export default Header
