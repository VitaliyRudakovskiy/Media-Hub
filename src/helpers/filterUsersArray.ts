import { DocumentData } from 'firebase/firestore';

import { UsersVariants } from '@/constants/usersSortTiles';
import { UserWithId } from '@/types/user';

const filterUsersArray = (
  users: UserWithId[],
  activeTile: string,
  currentUser: DocumentData | null
): UserWithId[] => {
  if (!currentUser) return [];

  switch (activeTile) {
    case UsersVariants.FRIENDS:
      return users?.filter(({ userData }) => currentUser?.friends?.includes(userData.id));
    case UsersVariants.REQUESTS:
      return users?.filter(({ userData }) => currentUser?.requests?.includes(userData.id));
    case UsersVariants.SENT_REQUESTS:
      return users?.filter(({ userData }) => currentUser?.sentRequests?.includes(userData.id));
    case UsersVariants.ALL_USERS:
      return users;
    default:
      return [];
  }
};

export default filterUsersArray;
