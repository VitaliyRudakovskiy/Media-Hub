import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'

import { editProfileSuccessToast } from '@/utils/toastManager'

import { USERS } from '../collections'
import { storage } from '..'

const deleteUserAvatar = async (userId: string, theme: 'dark' | 'light') => {
  const userRef = doc(USERS, userId)
  const userSnapshot = await getDoc(userRef)
  const userData = userSnapshot.data()

  try {
    const avatarRef = ref(storage, userData?.avatarName)
    await updateDoc(userRef, { avatarName: null })
    await deleteObject(avatarRef)
  } catch (error) {
    editProfileSuccessToast(theme)
  }
}

export default deleteUserAvatar
