import { DocumentData } from 'firebase/firestore';

import { UsersVariants } from '@/constants/usersSortTiles';

const defineUserFriend = (myUser: DocumentData, userId: string) => {
  if (myUser?.id === userId) return 'me';
  if (myUser?.friends?.includes(userId)) return UsersVariants.FRIENDS;
  if (myUser?.requests?.includes(userId)) return UsersVariants.REQUESTS;
  if (myUser?.sentRequests?.includes(userId)) return UsersVariants.SENT_REQUESTS;
  else return UsersVariants.ALL_USERS;
};

export default defineUserFriend;
