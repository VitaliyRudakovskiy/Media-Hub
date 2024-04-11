import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { POSTS } from '../collections';

const likePost = async (postId: string, userId: string, isLiked: boolean) => {
  const postRef = doc(POSTS, postId);

  try {
    if (isLiked) {
      await updateDoc(postRef, {
        likedBy: arrayRemove(userId),
      });
    } else {
      await updateDoc(postRef, {
        likedBy: arrayUnion(userId),
      });
    }
  } catch (error) {
    throw new Error(`Error occured while liking tweet: ${error}`);
  }
};

export default likePost;
