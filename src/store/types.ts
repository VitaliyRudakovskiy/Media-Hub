import { PostWithId } from '@/types/postType';
import { UserWithId } from '@/types/user';

export type IThemeState = {
  mode: 'dark' | 'light';
};

export type AuthType = {
  isAuth: boolean;
};

export type PostsType = {
  posts: PostWithId[];
  readonlyPosts: PostWithId[];
};

export type SearchOptionsType = {
  searchText: string;
  selectedOptions: string[];
};

export type SortPostsType = {
  categories: string[];
  isWithPictures: boolean;
  isWithComments: boolean;
  isLikedByMe: boolean;
  rating: string | null;
};

export type UsersType = {
  users: UserWithId[];
  readonlyUsers: UserWithId[];
};
