import { doc, getDoc } from 'firebase/firestore'

import { USERS } from '../collections'

const getUserById = async (userId: string) => {
  const userRef = doc(USERS, userId)
  const userDoc = await getDoc(userRef)
  return userDoc.data()
}

export default getUserById
