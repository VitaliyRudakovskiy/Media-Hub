'use client'

import { StyledLink } from './styled'
import { SidebarLinkProps } from './types'

const SidebarLink = ({ title, path }: SidebarLinkProps) => {
  return (
    <StyledLink href={path}>
      {/* <StyledImage src={icon} alt={`sidebar link for ${title}`} /> */}
      {title}
    </StyledLink>
  )
}

export default SidebarLink
