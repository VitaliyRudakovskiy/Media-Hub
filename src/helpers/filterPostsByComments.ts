import { PostWithId } from '@/types/postType';

const filterPostsByComments = (posts: PostWithId[]) => {
  return posts
    .filter((post) => post.postData.comments.length)
    .sort((a, b) => b.postData.comments.length - a.postData.comments.length);
};

export default filterPostsByComments;
