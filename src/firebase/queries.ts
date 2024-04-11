import { orderBy, query, where } from 'firebase/firestore';

import { COMMENTS, POSTS } from './collections';

export const postsQueryOrderedByCreatedAt = query(POSTS, orderBy('createdAt', 'desc'));
export const commentsQuery = query(COMMENTS);

export const searchPostsQuery = (inputValue: string) =>
  query(POSTS, where('title', '>=', inputValue), where('title', '<=', `${inputValue}\uf8ff`));
