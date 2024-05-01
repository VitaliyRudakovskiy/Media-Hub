'use client'

import { memo, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { UsersVariants } from '@/constants/usersSortTiles'
import approveRequest from '@/firebase/api/approveRequest'
import cancelFriendRequest from '@/firebase/api/cancelFriendRequest'
import deleteFriend from '@/firebase/api/deleteFriend'
import getUserByEmail from '@/firebase/api/getUserByEmail'
import sendFriendRequest from '@/firebase/api/sendFriendRequest'
import defineUserFriend from '@/helpers/defineUserFriend'
import { selectUser } from '@/store/slices/userSlice'
import Button from '@/UI/Button'

import { UserButtonsProps } from './types'

const UserButtons = ({ id, userData, isSmall = false }: UserButtonsProps) => {
  const [userType, setUserType] = useState('')
  const { email: myEmail } = useSelector(selectUser)
  const { id: userId, email } = userData

  const fetchUser = useCallback(async () => {
    const userData = await getUserByEmail(myEmail)
    const userAttitude = defineUserFriend(userData, userId)
    setUserType(userAttitude)
  }, [myEmail, userId])

  useEffect(() => {
    if (myEmail) fetchUser()
  }, [myEmail, fetchUser])

  const handleSendFriendRequest = async () => {
    await sendFriendRequest(myEmail, id, email)
    fetchUser()
  }

  const handleCancelFriendRequest = async () => {
    await cancelFriendRequest(myEmail, id, email)
    fetchUser()
  }

  const handleApproveRequest = async () => {
    await approveRequest(myEmail, id, email)
    fetchUser()
  }

  const handleDeleteFriend = async () => {
    await deleteFriend(myEmail, id, email)
    fetchUser()
  }

  if (userType === 'me') return null

  let buttonText = ''
  let handleClick = () => {}

  switch (userType) {
    case UsersVariants.FRIENDS:
      buttonText = 'Delete friend'
      handleClick = handleDeleteFriend
      break
    case UsersVariants.REQUESTS:
      buttonText = 'Approve request'
      handleClick = handleApproveRequest
      break
    case UsersVariants.SENT_REQUESTS:
      buttonText = 'Cancel request'
      handleClick = handleCancelFriendRequest
      break
    case UsersVariants.ALL_USERS:
      buttonText = 'Send request'
      handleClick = handleSendFriendRequest
      break
    default:
      break
  }

  return (
    <Button variant='secondary' onClick={handleClick} isSmall={isSmall}>
      {buttonText}
    </Button>
  )
}

export default memo(UserButtons)
