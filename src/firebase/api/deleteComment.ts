import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';

import { COMMENTS, POSTS } from '../collections';

const deleteComment = async (postId: string, commentId: string) => {
  const postRef = doc(POSTS, postId);
  const commentRef = doc(COMMENTS, commentId);

  try {
    await updateDoc(postRef, {
      comments: arrayRemove(commentId),
    });
    await deleteDoc(commentRef);
  } catch (error) {
    throw new Error(`Error occured while deleting comment: ${error}`);
  }
};

export default deleteComment;
