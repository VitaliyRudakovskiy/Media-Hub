import { LoginFormInput, LoginFormType } from '@/types/authFormType';

export const loginInputs: LoginFormInput[] = [
  {
    placeholder: 'Email',
    type: 'text',
    name: 'email',
  },
  {
    placeholder: 'Password',
    type: 'password',
    name: 'password',
  },
];

export const loginDefaultValues: LoginFormType = {
  email: '',
  password: '',
};
