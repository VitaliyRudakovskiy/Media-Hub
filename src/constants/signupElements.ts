import { FormInput, SignupFormType } from '@/types/authFormType';

export const signupInputs: FormInput[] = [
  { placeholder: 'Name', type: 'text', name: 'name' },
  { placeholder: 'Second Name', type: 'text', name: 'secondName' },
  { placeholder: 'Phone number', type: 'text', name: 'phone' },
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
  phone: '',
  email: '',
  password: '',
};
