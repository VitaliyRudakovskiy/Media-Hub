import Bookmark from '@/assets/images/bookmark.png';
import BookmarkFill from '@/assets/images/bookmark-fill.png';

const defineBookmarkIcon = (isBookmarked: boolean, theme: 'dark' | 'light') => {
  if (isBookmarked) return BookmarkFill;
  if (theme === 'light') return Bookmark;
  return Bookmark;
};

export default defineBookmarkIcon;
