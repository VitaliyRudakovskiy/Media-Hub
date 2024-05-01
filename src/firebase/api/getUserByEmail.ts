import { getDocs } from 'firebase/firestore'

import { singleUserQuery } from '../queries'

const getUserByEmail = async (email: string) => {
  const userSnapshot = await getDocs(singleUserQuery(email))
  const userData = userSnapshot?.docs[0]?.data()
  return userData
}

export default getUserByEmail
