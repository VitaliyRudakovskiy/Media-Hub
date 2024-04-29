import { PostWithId } from '@/types/postType';

const getUserPosts = (userEmail: string, posts: PostWithId[]) => {
  return posts.filter(({ postData }) => postData.email === userEmail);
};

export default getUserPosts;
