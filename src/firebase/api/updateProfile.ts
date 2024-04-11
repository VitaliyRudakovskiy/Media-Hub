import { getDocs, query, updateDoc, where } from 'firebase/firestore';

import { updateCurrentUser } from '@/store/slices/userSlice';
import { AppDispatch } from '@/store/store';
import { EditProfileType } from '@/types/editProfileElements';
import { FileType } from '@/types/fileType';

import { USERS } from '../collections';

import uploadPhoto from './uploadPhoto';

const updateProfile = async (
  userId: string,
  newData: Partial<EditProfileType>,
  file: FileType | null,
  dispatch: AppDispatch
) => {
  const profileQuery = query(USERS, where('id', '==', userId));
  const profileSnapshot = await getDocs(profileQuery);
  const profileRef = profileSnapshot.docs[0].ref;

  try {
    if (file) {
      const imageName = await uploadPhoto(file, userId);
      await updateDoc(profileRef, { ...newData, avatarName: imageName });
      dispatch(updateCurrentUser({ ...newData, avatarName: imageName }));
    } else {
      await updateDoc(profileRef, newData);
      dispatch(updateCurrentUser(newData));
    }
  } catch (error) {
    throw new Error(`Error occured while updating profile: ${error}`);
  }
};

export default updateProfile;
