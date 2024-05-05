import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation'

import LOCALES from './locales'
import ROUTES from './routes'

const pathnames: Record<string, string> = {
  '/dashboard': ROUTES.HOME,
  '/friends': ROUTES.FRIENDS,
  '/bookmarks': ROUTES.BOOKMARKS,
  '/profile': ROUTES.PROFILE,
  '/support': ROUTES.SUPPORT,
  '/login': ROUTES.LOGIN,
  '/signup': ROUTES.SIGNUP,
} satisfies Pathnames<typeof LOCALES>

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales: LOCALES,
  pathnames,
  localePrefix: 'always',
})
