'use client'

import { logout } from '@/firebase'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentUser } from '@/store/slices/userSlice'

import StyledButton from './styled'

const LogoutButton = () => {
  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    await logout()

    dispatch(
      setCurrentUser({
        avatarName: null,
        id: '',
        name: '',
        secondName: '',
        description: '',
        favourites: '',
        requests: [],
        sentRequests: [],
        friends: [],
        email: '',
        role: 'user',
        token: null,
      })
    )
  }

  return <StyledButton onClick={handleLogout}>Log out</StyledButton>
}

export default LogoutButton
