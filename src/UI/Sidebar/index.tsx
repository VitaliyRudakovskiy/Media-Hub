'use client';

import sidebarLinks from '@/constants/sidebarLinks';

import SidebarLink from './SidebarLink';
import { SidebarWrapper } from './styled';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      {sidebarLinks.map(({ title, path, icon }) => (
        <SidebarLink key={path} title={title} path={path} icon={icon} />
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
