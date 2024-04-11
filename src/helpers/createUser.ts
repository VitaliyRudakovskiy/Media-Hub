import { UserCredential } from 'firebase/auth';

import { UserType } from '@/types/user';

const createUser = (
  credentials: UserCredential,
  name: string,
  secondName: string,
  phone: string,
  email: string
): Partial<UserType> => {
  return {
    id: credentials.user.uid,
    name,
    secondName,
    phone,
    email,
    avatarName: null,
    birthday: '',
    description: '',
    favourites: '',
    role: 'user',
  };
};

export default createUser;
