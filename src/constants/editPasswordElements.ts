import { EditPasswordElementsType } from '@/types/editPasswordElements'

export const editPasswordElements: EditPasswordElementsType[] = [
  {
    placeholder: 'Your email',
    label: 'Confirm your email',
    name: 'email',
  },
  {
    placeholder: 'Old password',
    label: 'Enter your old password',
    name: 'oldPassword',
  },
  {
    placeholder: 'New password',
    label: 'Enter new password',
    name: 'newPassword',
  },
  {
    placeholder: 'New password again',
    label: 'Confirm new password',
    name: 'confirmPassword',
  },
]

export const defaultEditPasswordValues = {
  email: '',
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
}
