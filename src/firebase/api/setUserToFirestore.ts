import { addDoc } from 'firebase/firestore'

import { register } from '@/firebase'
import createUser from '@/helpers/createUser'
import { UserWithId } from '@/types/user'

import { USERS } from '../collections'

const setUserToFirestore = async (
  name: string,
  secondName: string,
  email: string,
  password: string
): Promise<Omit<UserWithId, 'id'>> => {
  const credentials = await register(email, password)
  const token = await credentials.user.getIdToken()
  const userData = createUser(credentials, name, secondName, email)

  await addDoc(USERS, userData)
  return { userData: { ...userData, token } }
}

export default setUserToFirestore
