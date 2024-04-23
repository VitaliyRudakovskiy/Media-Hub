import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

  useEffect(() => {
    if (myEmail) {
      const fetchUser = async () => {
        const userData = await getUserByEmail(myEmail);
        const userAttitude = defineUserFriend(userData, userId);
        setUserType(userAttitude);
      };
      fetchUser();
    }
  }, [myEmail, userId]);

  const handleSendFriendRequest = async () => {
    await sendFriendRequest(myEmail, id, email);
  };

  return (
    <S.UserWrapper>
      <DynamicAvatar email={email} width={80} height={80} initialsFontSize='38px' />
      <S.TextContainer>
        <S.UserName>
          {name} {secondName}
        </S.UserName>
        <S.UserDescription>{description}</S.UserDescription>
      </S.TextContainer>
      <UserButtons userType={userType} handleSendFriendRequest={handleSendFriendRequest} />
    </S.UserWrapper>
  );
};

export default memo(User);
