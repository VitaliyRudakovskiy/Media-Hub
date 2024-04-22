import { getDocs } from 'firebase/firestore';

import { signin } from '@/firebase';

import { singleUserQuery } from '../queries';

const getUserDataAndLogin = async (email: string, password: string) => {
  const querySnapshot = await getDocs(singleUserQuery(email));

  if (querySnapshot.empty) return {};

  const userData = querySnapshot.docs[0].data();
  const userCredentials = await signin(email, password);
  const token = await userCredentials.user.getIdToken();

  return { userData, token };
};

export default getUserDataAndLogin;
