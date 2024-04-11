import { getDocs, query, where } from 'firebase/firestore';

import { signin } from '@/firebase';

import { USERS } from '../collections';

const getUserDataAndLogin = async (email: string, password: string) => {
  const userQuery = query(USERS, where('email', '==', email));

  const querySnapshot = await getDocs(userQuery);

  if (querySnapshot.empty) return {};

  const userData = querySnapshot.docs[0].data();
  const userCredentials = await signin(email, password);
  const token = await userCredentials.user.getIdToken();

  return { userData, token };
};

export default getUserDataAndLogin;
