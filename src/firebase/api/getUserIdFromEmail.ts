import { getDocs } from 'firebase/firestore'

import { singleUserQuery } from '../queries'

const getUserIdByEmail = async (email: string) => {
  const userSnapshot = await getDocs(singleUserQuery(email))
  const userId = userSnapshot.docs[0].id
  return userId
}

export default getUserIdByEmail
