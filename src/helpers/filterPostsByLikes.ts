import { PostWithId } from '@/types/postType';

const filterPostsByLikes = (readonlyPosts: PostWithId[], currentUserId: string) => {
  return readonlyPosts.filter(({ postData }) => {
    return postData.likedBy.includes(currentUserId);
  });
};

export default filterPostsByLikes;
