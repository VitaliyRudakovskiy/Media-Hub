'use client';

import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import fetchPostsBySearch from '@/helpers/fetchPostsBySearch';
import filterPostsByBookmarks from '@/helpers/filterPostsByBookmarks';
import filterPostsByCategories from '@/helpers/filterPostsByCategories';
import filterPostsByComments from '@/helpers/filterPostsByComments';
import filterPostsByLikes from '@/helpers/filterPostsByLikes';
import filterPostsByPicture from '@/helpers/filterPostsByPicture';
import filterPostsByRating from '@/helpers/filterPostsByRating';
import { useAppDispatch } from '@/store/hooks';
import { selectReadonlyPosts, setPosts } from '@/store/slices/postsSlice';
import { selectOptions, selectSearchText } from '@/store/slices/searchOptionsSlice';
import {
  selectCategories,
  selectIsBookmarkedByMe,
  selectIsLikedByMe,
  selectIsWithComments,
  selectIsWithPictures,
  selectRatingSort,
} from '@/store/slices/sortPostsSlice';
import { selectUser } from '@/store/slices/userSlice';
import { PostWithId } from '@/types/postType';

import PostsSearch from '../PostsSearch';
import PostsSort from '../PostsSort';

import { SortSearchCotainer } from './styled';

const SearchSortLogic = () => {
  const readonlyPosts = useSelector(selectReadonlyPosts);
  const categories = useSelector(selectCategories);
  const isWithPictures = useSelector(selectIsWithPictures);
  const isWithComments = useSelector(selectIsWithComments);
  const isLikedByMe = useSelector(selectIsLikedByMe);
  const isBookmarkedByMe = useSelector(selectIsBookmarkedByMe);
  const ratingSort = useSelector(selectRatingSort);
  const searchText = useSelector(selectSearchText);
  const searchOptions = useSelector(selectOptions);
  const { id: userId } = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleSearch = useCallback(
    (posts: PostWithId[]) => {
      const searchedPosts = fetchPostsBySearch(posts, searchOptions, searchText);
      return searchedPosts;
    },
    [searchText, searchOptions]
  );

  const handleSort = useCallback(
    (posts: PostWithId[]) => {
      let sortedPosts = [...posts];

      if (categories.length) sortedPosts = filterPostsByCategories(sortedPosts, categories);
      if (isWithPictures) sortedPosts = filterPostsByPicture(sortedPosts);
      if (isWithComments) sortedPosts = filterPostsByComments(sortedPosts);
      if (isLikedByMe) sortedPosts = filterPostsByLikes(sortedPosts, userId);
      if (isBookmarkedByMe) sortedPosts = filterPostsByBookmarks(sortedPosts, userId);
      if (ratingSort) sortedPosts = filterPostsByRating(sortedPosts, ratingSort);

      return sortedPosts;
    },
    [categories, isWithPictures, isWithComments, isLikedByMe, isBookmarkedByMe, userId, ratingSort]
  );

  useEffect(() => {
    const searchedPosts = handleSearch(readonlyPosts);
    const sortedPosts = handleSort(searchedPosts);

    dispatch(setPosts(sortedPosts));
  }, [handleSearch, handleSort, readonlyPosts, dispatch]);

  return (
    <SortSearchCotainer>
      <PostsSearch />
      <PostsSort />
    </SortSearchCotainer>
  );
};

export default SearchSortLogic;
