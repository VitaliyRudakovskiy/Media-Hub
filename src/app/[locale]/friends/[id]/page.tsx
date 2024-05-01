import { useMessages, useTimeZone } from 'next-intl'
import { unstable_setRequestLocale as setLocale } from 'next-intl/server'

import UserProfileContainer from '@/components/UserProfileContainer'

import { UserProfileProps } from './types'

const UserProfile = ({ params: { locale, id } }: UserProfileProps) => {
  setLocale(locale)
  const messages = useMessages()
  const timeZone = useTimeZone() as string

  return (
    <main>
      <UserProfileContainer locale={locale} timeZone={timeZone} messages={messages} userId={id} />
    </main>
  )
}

export default UserProfile
