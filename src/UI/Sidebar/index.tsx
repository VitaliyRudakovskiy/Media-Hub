'use client'

import sidebarLinks from '@/constants/sidebarLinks'

import SidebarLink from './SidebarLink'
import { SidebarWrapper } from './styled'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      {sidebarLinks.map(({ title, path, icon, iconDark }) => (
        <SidebarLink key={path} title={title} path={path} icon={icon} iconDark={iconDark} />
      ))}
    </SidebarWrapper>
  )
}

export default Sidebar
