import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import approveRequest from '@/firebase/api/approveRequest';
import cancelFriendRequest from '@/firebase/api/cancelFriendRequest';
import deleteFriend from '@/firebase/api/deleteFriend';
import getUserByEmail from '@/firebase/api/getUserByEmail';
import sendFriendRequest from '@/firebase/api/sendFriendRequest';
import defineUserFriend from '@/helpers/defineUserFriend';
import { selectUser } from '@/store/slices/userSlice';
import { UserWithId } from '@/types/user';

import DynamicAvatar from '../Avatars/DynamicAvatar';

import * as S from './styled';
import UserButtons from './UserButtons';

const User = ({ id, userData }: UserWithId) => {
  const [userType, setUserType] = useState('');
  const { email: myEmail } = useSelector(selectUser);
  const { id: userId, email, name, secondName, description } = userData;

  const fetchUser = useCallback(async () => {
    const userData = await getUserByEmail(myEmail);
    const userAttitude = defineUserFriend(userData, userId);
    setUserType(userAttitude);
  }, [myEmail, userId]);

  useEffect(() => {
    if (myEmail) fetchUser();
  }, [myEmail, fetchUser]);

  const handleSendFriendRequest = async () => {
    await sendFriendRequest(myEmail, id, email);
    fetchUser();
  };

  const handleCancelFriendRequest = async () => {
    await cancelFriendRequest(myEmail, id, email);
    fetchUser();
  };

  const handleApproveRequest = async () => {
    await approveRequest(myEmail, id, email);
    fetchUser();
  };

  const handleDeletFriend = async () => {
    await deleteFriend(myEmail, id, email);
    fetchUser();
  };

  return (
    <S.UserWrapper>
      <S.LeftContainer>
        <DynamicAvatar email={email} width={80} height={80} initialsFontSize='38px' />
        <S.TextContainer>
          <S.UserNameLink href={`/friends/${id}`}>
            {name} {secondName}
          </S.UserNameLink>
          <S.UserDescription>{description}</S.UserDescription>
        </S.TextContainer>
      </S.LeftContainer>
      <UserButtons
        userType={userType}
        handleSendFriendRequest={handleSendFriendRequest}
        handleCancelFriendRequest={handleCancelFriendRequest}
        handleApproveRequest={handleApproveRequest}
        handleDeletFriend={handleDeletFriend}
      />
    </S.UserWrapper>
  );
};

export default memo(User);
