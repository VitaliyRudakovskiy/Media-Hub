import { Slide, toast } from 'react-toastify'

const commonToastOptions = {
  progress: undefined,
  transition: Slide,
}

const showToast = (message: string, type: 'success' | 'error', theme: 'dark' | 'light') => {
  toast[type](message, { ...commonToastOptions, theme })
}

export const loginSuccessToast = (theme: 'dark' | 'light', name: string) =>
  showToast(`Welcome back, ${name}!`, 'success', theme)

export const loginErrorToast = (theme: 'dark' | 'light') =>
  showToast(`User with this data not found.`, 'error', theme)

export const loginErrorCredentialsToast = (theme: 'dark' | 'light') =>
  showToast(`Invalid password. Try again.`, 'error', theme)

export const signupSuccessToast = (theme: 'dark' | 'light', name: string) =>
  showToast(`Welcome to Media Hub, ${name}!`, 'success', theme)

export const signupErrorToast = (theme: 'dark' | 'light') =>
  showToast(`User with this login already exists.`, 'error', theme)

export const createPostFormSuccessToast = (theme: 'dark' | 'light') =>
  showToast(`A new post was successfully created!`, 'success', theme)

export const createPostFormErrorToast = (theme: 'dark' | 'light') =>
  showToast(`Something went wrong while creating post.`, 'error', theme)

export const editPasswordErrorEnteredEmailToast = (theme: 'dark' | 'light') =>
  showToast(`The entered email does not match your current email.`, 'error', theme)

export const editPasswordErrorCredentialsToast = (theme: 'dark' | 'light') =>
  showToast(`Invalid old password. Try again.`, 'error', theme)

export const editPasswordUnhandledErrorToast = (theme: 'dark' | 'light') =>
  showToast(`Oops... Unhandled error. Something went wrong.`, 'error', theme)

export const editPasswordSuccessToast = (theme: 'dark' | 'light') =>
  showToast(`Your password was successfully changed!`, 'success', theme)

export const editProfileSuccessToast = (theme: 'dark' | 'light') =>
  showToast(`Your profile was successfully updated!`, 'success', theme)

export const editProfileErrorToast = (theme: 'dark' | 'light') =>
  showToast(`Something went wrong while updating profile.`, 'error', theme)

export const deletePostSuccessToast = (theme: 'dark' | 'light', message: string) =>
  showToast(message, 'success', theme)
