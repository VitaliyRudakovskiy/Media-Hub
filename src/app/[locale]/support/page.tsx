import { useMessages, useTimeZone } from 'next-intl'
import { unstable_setRequestLocale as setLocale } from 'next-intl/server'

import SupportContainer from '@/components/SupportContainer'
import { LocaleParams } from '@/types/locale'

const Support = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale)
  const messages = useMessages()
  const timeZone = useTimeZone() as string

  return (
    <main>
      <SupportContainer locale={locale} timeZone={timeZone} messages={messages} />
    </main>
  )
}

export default Support
