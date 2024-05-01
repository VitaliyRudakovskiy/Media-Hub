import { arrayUnion, doc, getDocs, updateDoc } from 'firebase/firestore'

import { USERS } from '../collections'
import { singleUserQuery } from '../queries'

const sendFriendRequest = async (
  myEmail: string,
  potentialFriendId: string,
  friendEmail: string
) => {
  const friendRef = doc(USERS, potentialFriendId)
  const friendSnapshot = await getDocs(singleUserQuery(friendEmail))
  const friendData = friendSnapshot.docs[0].data()
  const myProfileSnapshot = await getDocs(singleUserQuery(myEmail))
  const myProfileRef = myProfileSnapshot.docs[0].ref
  const myProfileData = myProfileSnapshot.docs[0].data()

  try {
    await updateDoc(friendRef, {
      requests: arrayUnion(myProfileData.id),
    })
    await updateDoc(myProfileRef, {
      sentRequests: arrayUnion(friendData.id),
    })
  } catch (error) {
    throw Error(`An error occured while sending friend request: ${error}`)
  }
}

export default sendFriendRequest
