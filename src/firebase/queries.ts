import { orderBy, query, where } from 'firebase/firestore'

import { COMMENTS, POSTS, USERS } from './collections'

export const postsQueryOrderedByCreatedAt = query(POSTS, orderBy('createdAt', 'desc'))
export const userPostsQuery = (userEmail: string) => query(POSTS, where('email', '==', userEmail))
export const usersQueryOrderedByEmail = query(USERS, orderBy('email', 'asc'))
export const commentsQuery = query(COMMENTS)

export const singleUserQuery = (email: string) => query(USERS, where('email', '==', email))
export const profileQuery = (userId: string) => query(USERS, where('id', '==', userId))
