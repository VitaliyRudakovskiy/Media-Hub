'use client'

import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

import ROUTES from '@/constants/routes'
import { selectIsAuth } from '@/store/slices/authSlice'
import Sidebar from '@/UI/Sidebar'

import SelectedPost from '../SelectedPost'

import { CenterSection, PostWrapper } from './styled'
import { PostContainerProps } from './types'

const PostContainer = ({ locale, messages, timeZone, postId }: PostContainerProps) => {
  const isAuth = useSelector(selectIsAuth)
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) router.push(ROUTES.LOGIN)
  }, [isAuth, router])

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <PostWrapper>
        <Sidebar />
        <CenterSection>
          <SelectedPost postId={postId} />
        </CenterSection>
      </PostWrapper>
    </NextIntlClientProvider>
  )
}

export default memo(PostContainer)
