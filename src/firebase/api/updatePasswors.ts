import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword as updateFirebasePassword,
} from 'firebase/auth'

import { EditPasswordSchemeType } from '@/validators/editPasswordScheme'

import { auth } from '..'

const updatePassword = async (data: EditPasswordSchemeType) => {
  const authUser = auth.currentUser
  if (!authUser) return

  try {
    if (data.email !== authUser.email)
      throw new Error('The entered email does not match your current email')

    const credential = EmailAuthProvider.credential(authUser.email, data.oldPassword)

    await reauthenticateWithCredential(authUser, credential)
    await updateFirebasePassword(authUser, data.newPassword)
  } catch (error) {
    throw new Error(`An error occured while changing password: ${error}`)
  }
}

export default updatePassword
