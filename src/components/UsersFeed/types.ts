import { UserWithId } from '@/types/user';

export type UsersFeedProps = {
  title?: string;
  renderedUsers: UserWithId[];
  feedType: string;
};
