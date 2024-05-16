import { getDocs, updateDoc } from 'firebase/firestore'

import { updateCurrentUser } from '@/store/slices/userSlice'
import { AppDispatch } from '@/store/store'
import { EditProfileType } from '@/types/editProfileElements'
import { FileType } from '@/types/fileType'
import { editProfileErrorToast, editProfileSuccessToast } from '@/utils/toastManager'

import { profileQuery } from '../queries'

import deleteUserAvatar from './deleteUserAvatar'
import getPostsOfUser from './getPostsOfUser'
import getUserIdByEmail from './getUserIdFromEmail'
import updatePostAuthors from './updatePostAuthors'
import uploadPhoto from './uploadPhoto'

const updateProfile = async (
  userId: string,
  newData: Partial<EditProfileType>,
  file: FileType | null,
  fileRemovedTrigger: boolean,
  oldName: string,
  oldSecondName: string,
  userEmail: string,
  dispatch: AppDispatch,
  theme: 'dark' | 'light'
) => {
  const profileSnapshot = await getDocs(profileQuery(userId))
  const profileRef = profileSnapshot.docs[0].ref

  const isNameChanged = oldName !== newData.name || oldSecondName !== newData.secondName

  try {
    if (isNameChanged) {
      const postsIds = await getPostsOfUser(userEmail)
      await updatePostAuthors(postsIds, newData.name, newData.secondName)
    }
    if (fileRemovedTrigger) {
      const currentUserId = await getUserIdByEmail(userEmail)
      await deleteUserAvatar(currentUserId, theme)
      dispatch(updateCurrentUser({ avatarName: null }))
    }
    if (file) {
      const imageName = await uploadPhoto(file, userId)
      await updateDoc(profileRef, { ...newData, avatarName: imageName })
      dispatch(updateCurrentUser({ ...newData, avatarName: imageName }))
    } else {
      await updateDoc(profileRef, newData)
      dispatch(updateCurrentUser(newData))
    }
    editProfileSuccessToast(theme)
  } catch (error) {
    editProfileErrorToast(theme)
  }
}

export default updateProfile
