'use client'

import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

import ROUTES from '@/constants/routes'
import { useAppDispatch } from '@/store/hooks'
import { selectIsAuth } from '@/store/slices/authSlice'
import { setIsBookmarkedByMe } from '@/store/slices/sortPostsSlice'
import { ContainerProps } from '@/types/nextIntlContainerProps'
import Sidebar from '@/UI/Sidebar'

import Feed from '../Feed'
import SearchSortLogic from '../SearchSortLogic'

import { BookmarksWrapper, CenterSection } from './styled'

const BookmarksContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  const isAuth = useSelector(selectIsAuth)
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setIsBookmarkedByMe(true))
  }, [dispatch])

  useEffect(() => {
    if (!isAuth) router.push(ROUTES.LOGIN)
  }, [isAuth, router])

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <BookmarksWrapper>
        <Sidebar />
        <CenterSection>
          <Feed />
        </CenterSection>
        <SearchSortLogic />
      </BookmarksWrapper>
    </NextIntlClientProvider>
  )
}

export default memo(BookmarksContainer)
