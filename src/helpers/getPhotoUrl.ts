import { getDownloadURL, ref } from 'firebase/storage';

import { storage } from '@/firebase';

const getPhotoURL = async (avatarName: string | null) => {
  let photoURL = '';

  if (avatarName) {
    photoURL = await getDownloadURL(ref(storage, avatarName));
  }

  return photoURL;
};

export default getPhotoURL;
