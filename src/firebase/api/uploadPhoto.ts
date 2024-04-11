import { ref, uploadBytes } from 'firebase/storage';

import compressFile from '@/helpers/compressFile';
import { FileType } from '@/types/fileType';

import { storage } from '..';

const uploadPhoto = async (file: FileType, userId: string) => {
  if (!file) return null;

  const now = new Date();
  const photoId = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}-${now.getMilliseconds()}-${userId}`;
  const photoName = `avatars/${photoId}.jpg`;
  const photoRef = ref(storage, photoName);

  const compressedPhoto = await compressFile(file);

  try {
    await uploadBytes(photoRef, compressedPhoto);
  } catch (error) {
    throw new Error(`An error occured while uploading photo: ${error}`);
  }

  return photoName;
};

export default uploadPhoto;
