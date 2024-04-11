'use client';

import { memo } from 'react';

import { Count, Icon, ReactionWrapper } from './styled';
import { PostReactionType } from './types';

const PostReaction = ({ reactionsCount, icon, onClick }: PostReactionType) => {
  return (
    <ReactionWrapper $count={reactionsCount} onClick={onClick}>
      <Icon src={icon} alt={`reaction-${icon}`} width={20} height={20} />
      {reactionsCount !== 0 && <Count>{reactionsCount}</Count>}
    </ReactionWrapper>
  );
};

export default memo(PostReaction);
