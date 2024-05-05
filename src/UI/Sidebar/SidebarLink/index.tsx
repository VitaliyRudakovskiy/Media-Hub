'use client'

import { memo } from 'react'
import { useSelector } from 'react-redux'

import { selectTheme } from '@/store/slices/themeSlice'

import { StyledImage, StyledLink } from './styled'
import { SidebarLinkProps } from './types'

const SidebarLink = ({ title, path, icon, iconDark }: SidebarLinkProps) => {
  const theme = useSelector(selectTheme)

  const iconSrc = theme === 'light' ? icon : iconDark

  return (
    <StyledLink href={path}>
      <StyledImage src={iconSrc} alt={`sidebar link for ${title}`} width={25} height={25} />
      {title}
    </StyledLink>
  )
}

export default memo(SidebarLink)
