'use client';

import { UsersVariants } from '@/constants/usersSortTiles';
import Button from '@/UI/Button';

import { UserButtonsProps } from './types';

const UserButtons = ({ userType, handleSendFriendRequest }: UserButtonsProps) => {
  if (userType === 'me') return null;
  if (userType === UsersVariants.FRIENDS) return <Button variant='secondary'>Delete friend</Button>;
  if (userType === UsersVariants.REQUESTS)
    return <Button variant='secondary'>Approve request</Button>;
  if (userType === UsersVariants.SENT_REQUESTS)
    return <Button variant='secondary'>Cancel request</Button>;
  if (userType === UsersVariants.ALL_USERS)
    return (
      <Button variant='secondary' onClick={handleSendFriendRequest}>
        Send request
      </Button>
    );
  return null;
};

export default UserButtons;
