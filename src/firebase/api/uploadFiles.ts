import { v4 as uuidv4 } from 'uuid';

import { ref, storage, uploadBytes } from '@/firebase';
import compressFile from '@/helpers/compressFile';
import { FileType } from '@/types/fileType';

const uploadFiles = async (selectedFiles: FileType[], email: string) => {
  const now = new Date();
  const fileIds = [];

  for (let i = 0; i < selectedFiles.length; i++) {
    const imageId = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}-${now.getMilliseconds()}-${uuidv4()}`;
    const imageName = `images/${email}/${imageId}.jpg`;
    const fileRef = ref(storage, imageName);

    const compressedImage = await compressFile(selectedFiles[i]);

    try {
      await uploadBytes(fileRef, compressedImage);
      fileIds.push(imageName);
    } catch (error) {
      throw new Error(`An error occured while uploading files: ${error}`);
    }
  }

  return fileIds;
};

export default uploadFiles;
