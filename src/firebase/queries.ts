import { orderBy, query, where } from 'firebase/firestore';

import { COMMENTS, POSTS, USERS } from './collections';

export const postsQueryOrderedByCreatedAt = query(POSTS, orderBy('createdAt', 'desc'));
export const usersQueryOrderedByEmail = query(USERS, orderBy('email', 'asc'));
export const commentsQuery = query(COMMENTS);

export const searchPostsQuery = (inputValue: string) =>
  query(POSTS, where('title', '>=', inputValue), where('title', '<=', `${inputValue}\uf8ff`));

export const singleUserQuery = (email: string) => query(USERS, where('email', '==', email));
