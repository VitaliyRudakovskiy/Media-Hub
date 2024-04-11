'use client';

import EyeIcon from '@/assets/images/eye.png';
import CrossedEyeIcon from '@/assets/images/eye-crossed.png';

import { Eye, ViewContainer } from './styled';
import { PostViewsProps } from './types';

const PostViews = ({ visibility, views }: PostViewsProps) => {
  return (
    <ViewContainer>
      {visibility === 'public' ? (
        <>
          <Eye src={EyeIcon} alt='eye icon' />
          <span>{views}</span>
        </>
      ) : (
        <>
          <Eye src={CrossedEyeIcon} alt='crossed eye icon' />
          <span>Private</span>
        </>
      )}
    </ViewContainer>
  );
};

export default PostViews;
