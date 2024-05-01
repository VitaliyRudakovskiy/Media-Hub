import { useMessages, useTimeZone } from 'next-intl'
import { unstable_setRequestLocale as setLocale } from 'next-intl/server'

import FriendsContainer from '@/components/FriendsContainer'
import { LocaleParams } from '@/types/locale'

const Friends = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale)
  const messages = useMessages()
  const timeZone = useTimeZone() as string

  return (
    <main>
      <FriendsContainer locale={locale} timeZone={timeZone} messages={messages} />
    </main>
  )
}

export default Friends
