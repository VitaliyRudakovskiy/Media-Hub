import { PostWithId } from '@/types/postType';

const filterPostsByBookmarks = (readonlyPosts: PostWithId[], currentUserId: string) => {
  return readonlyPosts.filter(({ postData }) => {
    return postData.bookmarks.includes(currentUserId);
  });
};

export default filterPostsByBookmarks;
