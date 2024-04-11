import { deleteDoc, doc } from 'firebase/firestore';

import { POSTS } from '../collections';

import deletePostComments from './deletePostComments';
import deletePostFiles from './deletePostFiles';

const deletePost = async (id: string) => {
  const postRef = doc(POSTS, id);

  try {
    await deletePostFiles(postRef);
    await deletePostComments(postRef);
    await deleteDoc(postRef);
  } catch (error) {
    throw new Error(`Error occured while deleting post: ${error}`);
  }
};

export default deletePost;
