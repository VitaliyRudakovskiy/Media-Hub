'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/firebase'
import { useAppDispatch } from '@/store/hooks'
import { setIsAuth } from '@/store/slices/authSlice'
import { ChildrenProps } from '@/types/childrenType'

const UserGateProvider = ({ children }: ChildrenProps) => {
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setIsAuth(!!user))
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [dispatch])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return children
}

export default UserGateProvider
