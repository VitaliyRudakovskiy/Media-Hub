import { UseFormReset, UseFormSetValue } from 'react-hook-form'
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword as updateFirebasePassword,
} from 'firebase/auth'

import {
  editPasswordErrorCredentialsToast,
  editPasswordErrorEnteredEmailToast,
  editPasswordSuccessToast,
  editPasswordUnhandledErrorToast,
} from '@/utils/toastManager'
import { EditPasswordSchemeType } from '@/validators/editPasswordScheme'

import { auth } from '..'

const updatePassword = async (
  data: EditPasswordSchemeType,
  theme: 'dark' | 'light',
  handleClose: () => void,
  setValue: UseFormSetValue<EditPasswordSchemeType>,
  reset: UseFormReset<EditPasswordSchemeType>
) => {
  const authUser = auth.currentUser
  if (!authUser) return

  try {
    if (data.email !== authUser.email) {
      editPasswordErrorEnteredEmailToast(theme)
      setValue('email', '')
      return
    }

    const credential = EmailAuthProvider.credential(authUser.email, data.oldPassword)

    try {
      await reauthenticateWithCredential(authUser, credential)
    } catch (error) {
      editPasswordErrorCredentialsToast(theme)
      setValue('oldPassword', '')
      setValue('newPassword', '')
      setValue('confirmPassword', '')
      return
    }

    try {
      await updateFirebasePassword(authUser, data.newPassword)
      editPasswordSuccessToast(theme)
      handleClose()
      reset()
    } catch (error) {
      editPasswordUnhandledErrorToast(theme)
    }
  } catch (error) {
    editPasswordUnhandledErrorToast(theme)
  }
}

export default updatePassword
