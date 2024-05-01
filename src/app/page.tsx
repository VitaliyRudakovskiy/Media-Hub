import { redirect } from 'next/navigation'

import ROUTES from '@/constants/routes'

const RootPage = () => {
  redirect(ROUTES.HOME)
}

export default RootPage
