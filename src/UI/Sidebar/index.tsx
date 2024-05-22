'use client'

import { useTranslations } from 'next-intl'

import sidebarLinks from '@/constants/sidebarLinks'

import SidebarLink from './SidebarLink'
import { SidebarWrapper } from './styled'

const Sidebar = () => {
  const t = useTranslations('sidebar')

  return (
    <SidebarWrapper>
      {sidebarLinks.map(({ title, path, icon, iconDark }) => (
        <SidebarLink key={path} title={t(title)} path={path} icon={icon} iconDark={iconDark} />
      ))}
    </SidebarWrapper>
  )
}

export default Sidebar
