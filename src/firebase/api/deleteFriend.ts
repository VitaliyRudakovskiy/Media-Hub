import { arrayRemove, arrayUnion, doc, getDocs, updateDoc } from 'firebase/firestore';

import { USERS } from '../collections';
import { singleUserQuery } from '../queries';

const deleteFriend = async (myEmail: string, newFriendId: string, friendEmail: string) => {
  const myProfileSnapshot = await getDocs(singleUserQuery(myEmail));
  const myProfileRef = myProfileSnapshot.docs[0].ref;
  const myProfileData = myProfileSnapshot.docs[0].data();
  const friendRef = doc(USERS, newFriendId);
  const friendSnapshot = await getDocs(singleUserQuery(friendEmail));
  const friendData = friendSnapshot.docs[0].data();

  try {
    await updateDoc(myProfileRef, {
      friends: arrayRemove(friendData.id),
      requests: arrayUnion(friendData.id),
    });
    await updateDoc(friendRef, {
      friends: arrayRemove(myProfileData.id),
      sentRequests: arrayUnion(myProfileData.id),
    });
  } catch (error) {
    throw Error(`An error occured while deleting friend: ${error}`);
  }
};

export default deleteFriend;
