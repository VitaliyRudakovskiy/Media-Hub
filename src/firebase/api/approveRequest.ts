import { arrayRemove, arrayUnion, doc, getDocs, updateDoc } from 'firebase/firestore'

import { USERS } from '../collections'
import { singleUserQuery } from '../queries'

const approveRequest = async (myEmail: string, newFriendId: string, friendEmail: string) => {
  const myProfileSnapshot = await getDocs(singleUserQuery(myEmail))
  const myProfileRef = myProfileSnapshot.docs[0].ref
  const myProfileData = myProfileSnapshot.docs[0].data()
  const friendRef = doc(USERS, newFriendId)
  const friendSnapshot = await getDocs(singleUserQuery(friendEmail))
  const friendData = friendSnapshot.docs[0].data()

  try {
    await updateDoc(myProfileRef, {
      requests: arrayRemove(friendData.id),
      friends: arrayUnion(friendData.id),
    })
    await updateDoc(friendRef, {
      sentRequests: arrayRemove(myProfileData.id),
      friends: arrayUnion(myProfileData.id),
    })
  } catch (error) {
    throw Error(`An error occured while approving friend request: ${error}`)
  }
}

export default approveRequest
