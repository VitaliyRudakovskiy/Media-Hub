import { getDocs, updateDoc } from 'firebase/firestore'

import { updateCurrentUser } from '@/store/slices/userSlice'
import { AppDispatch } from '@/store/store'
import { EditProfileType } from '@/types/editProfileElements'
import { FileType } from '@/types/fileType'

import { profileQuery } from '../queries'

import getPostsOfUser from './getPostsOfUser'
import updatePostAuthors from './updatePostAuthors'
import uploadPhoto from './uploadPhoto'

const updateProfile = async (
  userId: string,
  newData: Partial<EditProfileType>,
  file: FileType | null,
  oldName: string,
  oldSecondName: string,
  userEmail: string,
  dispatch: AppDispatch
) => {
  const profileSnapshot = await getDocs(profileQuery(userId))
  const profileRef = profileSnapshot.docs[0].ref

  const isNameChanged = oldName !== newData.name || oldSecondName !== newData.secondName

  try {
    if (isNameChanged) {
      const postsIds = await getPostsOfUser(userEmail)
      await updatePostAuthors(postsIds, newData.name, newData.secondName)
    }
    if (file) {
      const imageName = await uploadPhoto(file, userId)
      await updateDoc(profileRef, { ...newData, avatarName: imageName })
      dispatch(updateCurrentUser({ ...newData, avatarName: imageName }))
    } else {
      await updateDoc(profileRef, newData)
      dispatch(updateCurrentUser(newData))
    }
  } catch (error) {
    throw new Error(`Error occured while updating profile: ${error}`)
  }
}

export default updateProfile
