'use client';

import Button from '@/UI/Button';

import { UserButtonsProps } from './types';

const UserButtons = ({ userType }: UserButtonsProps) => {
  if (userType === 'friends') return <Button variant='secondary'>Delete friend</Button>;
  if (userType === 'sentRequests') return <Button variant='secondary'>Cancel request</Button>;
  if (userType === 'requests') return <Button variant='secondary'>Approve request</Button>;
  return null;
};

export default UserButtons;
