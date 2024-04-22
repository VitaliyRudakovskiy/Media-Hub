import { FormInput, SignupFormType } from '@/types/authFormType';

export const signupInputs: FormInput[] = [
  { placeholder: 'Name', type: 'text', name: 'name' },
  { placeholder: 'Second Name', type: 'text', name: 'secondName' },
  { placeholder: 'Email', type: 'email', name: 'email' },
  {
    placeholder: 'Password',
    type: 'password',
    name: 'password',
  },
];

export const signupDefaultValues: SignupFormType = {
  name: '',
  secondName: '',
  email: '',
  password: '',
};
