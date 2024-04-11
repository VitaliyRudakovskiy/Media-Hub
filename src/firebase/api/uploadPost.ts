import { Dispatch, SetStateAction } from 'react';
import { addDoc } from 'firebase/firestore';

import createPost from '@/helpers/createPost';
import { FileType } from '@/types/fileType';
import { VisibilityType } from '@/types/visibilityType';

import { POSTS } from '../collections';

import uploadFiles from './uploadFiles';

const uploadPost = async (
  title: string,
  text: string,
  tags: string,
  category: string,
  name: string,
  email: string,
  uploadedfiles: FileType[],
  visibility: VisibilityType,
  setLoadingState: Dispatch<SetStateAction<boolean>>,
  rating?: number
) => {
  setLoadingState(true);
  if (!rating) rating = 0;

  const files = await uploadFiles(uploadedfiles, email);
  const post = createPost(title, text, tags, category, rating, email, name, files, visibility);

  try {
    await addDoc(POSTS, post);
  } catch (error) {
    throw new Error(`An error occured while uploading tweet: ${error}`);
  } finally {
    setLoadingState(false);
  }
};

export default uploadPost;
