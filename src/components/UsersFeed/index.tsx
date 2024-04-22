'use client';

import User from '@/UI/User';

import { CommonContainer, UsersFeedTitle, UsersFeedWrapper } from './styled';
import { UsersFeedProps } from './types';

const UsersFeed = ({ title = 'Your friends', renderedUsers, feedType }: UsersFeedProps) => {
  return (
    <CommonContainer>
      <UsersFeedTitle>{title}</UsersFeedTitle>
      <UsersFeedWrapper>
        {renderedUsers.map(({ id, userData }) => (
          <User key={id} id={id} userData={userData} userType={feedType} />
        ))}
      </UsersFeedWrapper>
    </CommonContainer>
  );
};

export default UsersFeed;
