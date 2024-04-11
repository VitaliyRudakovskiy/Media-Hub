/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PostWithId } from '@/types/postType';

const fetchPostsBySearch = (posts: PostWithId[], searchOptions: string[], searchText: string) => {
  const filteredPosts = posts.filter(({ postData }) =>
    searchOptions.some((option) =>
      // @ts-ignore
      postData[option]?.toLowerCase().includes(searchText.toLowerCase())
    )
  );
  return filteredPosts;
};

export default fetchPostsBySearch;
