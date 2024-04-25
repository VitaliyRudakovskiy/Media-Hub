'use client';

import { memo } from 'react';

import { UsersVariants } from '@/constants/usersSortTiles';
import Button from '@/UI/Button';

import { UserButtonsProps } from './types';

const UserButtons = ({
  userType,
  handleSendFriendRequest,
  handleCancelFriendRequest,
  handleApproveRequest,
  handleDeletFriend,
}: UserButtonsProps) => {
  if (userType === 'me') return null;
  if (userType === UsersVariants.FRIENDS)
    return (
      <Button variant='secondary' onClick={handleDeletFriend}>
        Delete friend
      </Button>
    );
  if (userType === UsersVariants.REQUESTS)
    return (
      <Button variant='secondary' onClick={handleApproveRequest}>
        Approve request
      </Button>
    );
  if (userType === UsersVariants.SENT_REQUESTS)
    return (
      <Button variant='secondary' onClick={handleCancelFriendRequest}>
        Cancel request
      </Button>
    );
  if (userType === UsersVariants.ALL_USERS)
    return (
      <Button variant='secondary' onClick={handleSendFriendRequest}>
        Send request
      </Button>
    );
  return null;
};

export default memo(UserButtons);
