import { addDoc } from 'firebase/firestore';

import { register } from '@/firebase';
import createUser from '@/helpers/createUser';

import { USERS } from '../collections';

const setUserToFirestore = async (
  name: string,
  secondName: string,
  phone: string,
  email: string,
  password: string
) => {
  const credentials = await register(email, password);
  const token = await credentials.user.getIdToken();
  const userData = createUser(credentials, name, secondName, phone, email);

  await addDoc(USERS, userData);
  return { userData: { ...userData, token } };
};

export default setUserToFirestore;
