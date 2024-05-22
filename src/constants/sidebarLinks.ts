import BookmarksBlack from '@/assets/icons/sidebarIcons/bookmarks-black.svg'
import BookmarksWhite from '@/assets/icons/sidebarIcons/bookmarks-white.svg'
import FriendsBlack from '@/assets/icons/sidebarIcons/friends-black.webp'
import FriendsWhite from '@/assets/icons/sidebarIcons/friends-white.webp'
import HomeBlack from '@/assets/icons/sidebarIcons/home-black.webp'
import HomeWhite from '@/assets/icons/sidebarIcons/home-white.webp'
import ProfileBlack from '@/assets/icons/sidebarIcons/profile-black.webp'
import ProfileWhite from '@/assets/icons/sidebarIcons/profile-white.webp'
import SupportBlack from '@/assets/icons/sidebarIcons/support-black.webp'
import SupportWhite from '@/assets/icons/sidebarIcons/support-white.webp'

const sidebarLinks = [
  {
    title: 'home',
    path: '/',
    icon: HomeBlack,
    iconDark: HomeWhite,
  },
  {
    title: 'friends',
    path: '/friends',
    icon: FriendsBlack,
    iconDark: FriendsWhite,
  },
  {
    title: 'bookmarks',
    path: '/bookmarks',
    icon: BookmarksBlack,
    iconDark: BookmarksWhite,
  },
  {
    title: 'profile',
    path: '/profile',
    icon: ProfileBlack,
    iconDark: ProfileWhite,
  },
  {
    title: 'support',
    path: '/support',
    icon: SupportBlack,
    iconDark: SupportWhite,
  },
]

export default sidebarLinks
