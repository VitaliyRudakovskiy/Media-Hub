import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { POSTS } from '../collections';

const bookmarkPost = async (postId: string, userId: string, isBookmarked: boolean) => {
  const tweetRef = doc(POSTS, postId);

  try {
    if (isBookmarked) {
      await updateDoc(tweetRef, {
        bookmarks: arrayRemove(userId),
      });
    } else {
      await updateDoc(tweetRef, {
        bookmarks: arrayUnion(userId),
      });
    }
  } catch (error) {
    throw new Error(`Error occured while bookmarking tweet: ${error}`);
  }
};

export default bookmarkPost;
