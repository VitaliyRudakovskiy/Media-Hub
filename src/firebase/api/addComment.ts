import { addDoc, arrayUnion, doc, updateDoc } from 'firebase/firestore';

import createComment from '@/helpers/createComment';

import { COMMENTS, POSTS } from '../collections';

const addComment = async (postId: string, text: string, name: string, email: string) => {
  const comment = createComment(text, name, email);

  try {
    const commentRef = await addDoc(COMMENTS, comment);

    const commentId = commentRef.id;
    const postRef = doc(POSTS, postId);
    await updateDoc(postRef, {
      comments: arrayUnion(commentId),
    });
  } catch (error) {
    throw new Error(`An error occured while uploading tweet: ${error}`);
  }
};

export default addComment;
