import { UserWithId } from '@/types/user';

const fetchUsersBySearch = (users: UserWithId[], searchString: string): UserWithId[] => {
  const lowerCaseSearchString = searchString.toLowerCase();

  return users.filter(
    ({ userData: { name, secondName } }) =>
      name.toLowerCase().includes(lowerCaseSearchString) ||
      secondName.toLowerCase().includes(lowerCaseSearchString)
  );
};

export default fetchUsersBySearch;
