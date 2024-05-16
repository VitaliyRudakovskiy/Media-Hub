import { ToastContainer } from 'react-toastify'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { NextIntlClientProvider, useMessages, useTimeZone } from 'next-intl'
import { unstable_setRequestLocale as setLocale } from 'next-intl/server'

import LOCALES from '@/constants/locales'
import StoreProvider from '@/providers/StoreProvider'
import StyledComponentsProvider from '@/providers/StyledComponentsProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import UserGateProvider from '@/providers/UserGateProvider'

import 'react-toastify/dist/ReactToastify.css'

import { LocaleLayoutProps } from './types'

const senLatin = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Media Hub',
  description: 'Media organizer application made via Next.js',
}

export const generateStaticParams = () => {
  return LOCALES.map((locale) => ({ locale }))
}

const LocaleLayout = ({ children, params: { locale } }: LocaleLayoutProps) => {
  setLocale(locale)
  const messages = useMessages()
  const timeZone = useTimeZone()

  return (
    <html lang={locale}>
      <body className={senLatin.className}>
        <StyledComponentsProvider>
          <StoreProvider>
            <ThemeProvider>
              <UserGateProvider>
                <NextIntlClientProvider timeZone={timeZone} messages={messages}>
                  {children}
                  <ToastContainer
                    position='top-right'
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </NextIntlClientProvider>
              </UserGateProvider>
            </ThemeProvider>
          </StoreProvider>
        </StyledComponentsProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
