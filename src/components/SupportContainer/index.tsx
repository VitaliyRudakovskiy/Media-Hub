'use client'

import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

import ROUTES from '@/constants/routes'
import { selectIsAuth } from '@/store/slices/authSlice'
import { ContainerProps } from '@/types/nextIntlContainerProps'
import Sidebar from '@/UI/Sidebar'

import FAQComponent from '../FAQ'
import SupportForm from '../SupportForm'

import { CenterSection, SupportWrapper } from './styled'

const SupportContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  const isAuth = useSelector(selectIsAuth)
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) router.push(ROUTES.LOGIN)
  }, [isAuth, router])

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <SupportWrapper>
        <Sidebar />
        <CenterSection>
          <SupportForm />
          <FAQComponent />
        </CenterSection>
      </SupportWrapper>
    </NextIntlClientProvider>
  )
}

export default memo(SupportContainer)
