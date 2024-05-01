import { UserCredential } from 'firebase/auth'

import { UserType } from '@/types/user'

const createUser = (
  credentials: UserCredential,
  name: string,
  secondName: string,
  email: string
): Omit<UserType, 'token'> => {
  return {
    id: credentials.user.uid,
    name,
    secondName,
    email,
    avatarName: null,
    description: '',
    favourites: '',
    requests: [],
    sentRequests: [],
    friends: [],
    role: 'user',
  }
}

export default createUser
