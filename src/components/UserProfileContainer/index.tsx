'use client'

import { memo, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DocumentData } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

import ROUTES from '@/constants/routes'
import getUserById from '@/firebase/api/getUserById'
import { selectIsAuth } from '@/store/slices/authSlice'
import Sidebar from '@/UI/Sidebar'

import MayBeFriends from '../MayBeFriends'
import UserPosts from '../UserPosts'
import UserProfile from '../UserProfile'

import * as S from './styled'
import { UserProfileContainerProps } from './types'

const UserProfileContainer = ({
  locale,
  messages,
  timeZone,
  userId,
}: UserProfileContainerProps) => {
  const [userData, setUserData] = useState<DocumentData | null>(null)
  const [loadingUser, setLoadingUser] = useState<boolean>(true)
  const isAuth = useSelector(selectIsAuth)
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) router.push(ROUTES.LOGIN)
  }, [isAuth, router])

  const fetchUser = useCallback(async () => {
    try {
      setLoadingUser(true)
      const userData = await getUserById(userId)
      if (userData) setUserData(userData)
      setLoadingUser(false)
    } catch (error) {
      setLoadingUser(false)
      throw Error(`An error occured while fetching user profile page: ${error}`)
    }
  }, [userId])

  useEffect(() => {
    if (userId) fetchUser()
  }, [fetchUser, userId])

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <S.UserProfileWrapper>
        <Sidebar />
        <S.CenterSection>
          {loadingUser ? (
            <div>Loading...</div>
          ) : (
            <>
              <UserProfile userData={userData} userId={userId} />
              <S.PostsContainer>
                <UserPosts userEmail={userData?.email} />
                <MayBeFriends />
              </S.PostsContainer>
            </>
          )}
        </S.CenterSection>
      </S.UserProfileWrapper>
    </NextIntlClientProvider>
  )
}

export default memo(UserProfileContainer)
