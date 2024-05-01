'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { onSnapshot } from 'firebase/firestore'

import { NoUsersVariants } from '@/constants/noUsersVariants'
import { UserTitles } from '@/constants/userTitles'
import { usersQueryOrderedByEmail } from '@/firebase/queries'
import { useAppDispatch } from '@/store/hooks'
import { selectActiveTile } from '@/store/slices/searchUsersSlice'
import { selectUsers, setReadonlyUsers, setUsers } from '@/store/slices/usersSlice'
import { UserWithId } from '@/types/user'
import User from '@/UI/User'

import defineConfig from './defineConfig'
import { CommonContainer, NoUsers, UsersFeedTitle, UsersFeedWrapper } from './styled'

const UsersFeed = () => {
  const users = useSelector(selectUsers)
  const activeTile = useSelector(selectActiveTile)
  const [isLoading, setIsLoading] = useState(false)
  const [config, setConfig] = useState({
    title: UserTitles.Friends,
    noUsers: NoUsersVariants.NoFriends,
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    const newConfig = defineConfig(activeTile)
    setConfig(newConfig)
  }, [activeTile])

  useEffect(() => {
    setIsLoading(true)

    const unsubscribe = onSnapshot(usersQueryOrderedByEmail, (snapshot) => {
      const userData = snapshot.docs.map((doc) => ({
        id: doc.id,
        userData: doc.data(),
      })) as UserWithId[]

      dispatch(setUsers(userData))
      dispatch(setReadonlyUsers(userData))
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <CommonContainer>
      <UsersFeedTitle>{config.title}</UsersFeedTitle>
      <UsersFeedWrapper>
        {users.length > 0 ? (
          users.map(({ id, userData }) => <User key={id} id={id} userData={userData} />)
        ) : (
          <NoUsers>{config.noUsers}</NoUsers>
        )}
      </UsersFeedWrapper>
    </CommonContainer>
  )
}

export default UsersFeed
