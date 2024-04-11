import LikeOutline from '@/assets/images/like.png';
import RedLike from '@/assets/images/like-red.png';

const defineLikeIcon = (isLiked: boolean, theme: 'dark' | 'light') => {
  if (isLiked) return RedLike;
  if (theme === 'light') return LikeOutline;
  return LikeOutline;
};

export default defineLikeIcon;
