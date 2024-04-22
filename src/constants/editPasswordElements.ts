import { EditPasswordElementsType } from '@/types/editPasswordElements';

export const editPasswordElements: EditPasswordElementsType[] = [
  {
    placeholder: 'Confirm email',
    name: 'email',
  },
  {
    placeholder: 'Enter old password',
    name: 'oldPassword',
  },
  {
    placeholder: 'Enter new password',
    name: 'newPassword',
  },
  {
    placeholder: 'Confirm new password',
    name: 'confirmPassword',
  },
];

export const defaultEditPasswordValues = {
  email: '',
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};
