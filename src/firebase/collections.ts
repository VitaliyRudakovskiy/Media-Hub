import { collection } from 'firebase/firestore';

import { firestore } from '.';

export const USERS = collection(firestore, 'users');
export const POSTS = collection(firestore, 'posts');
export const COMMENTS = collection(firestore, 'comments');
export const ROLES = collection(firestore, 'roles'); // user or admin
export const POST_VISIBILITIES = collection(firestore, 'post-visibilities'); // public or private
