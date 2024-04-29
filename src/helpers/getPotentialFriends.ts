import { UserWithId } from '@/types/user';

const getPotentialFriends = (allUsers: UserWithId[], myId: string, myEmail: string) => {
  const usersWithDescription = allUsers.filter(
    ({ userData }) =>
      userData?.description.length &&
      userData?.email !== myEmail &&
      !userData?.friends?.includes(myId)
  );

  const usersWithoutDescription = allUsers.filter(
    ({ userData }) =>
      !userData?.description.length &&
      userData?.email !== myEmail &&
      !userData?.friends?.includes(myId)
  );

  const potentialFriends = [...usersWithDescription, ...usersWithoutDescription];

  return potentialFriends.slice(0, 4);
};

export default getPotentialFriends;
