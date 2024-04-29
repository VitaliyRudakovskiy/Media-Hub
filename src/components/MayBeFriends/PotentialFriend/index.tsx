'use client';

import { UserWithId } from '@/types/user';
import DynamicAvatar from '@/UI/Avatars/DynamicAvatar';
import UserButtons from '@/UI/UserButtons';

import * as S from './styled';

const PotentialFriend = ({ id, userData }: UserWithId) => {
  const { email, name, secondName, description } = userData;

  return (
    <S.PoterntialFriendWrapper>
      <S.FriendLeftContainer>
        <DynamicAvatar email={email} width={50} height={50} initialsFontSize='20px' />
        <S.FriendTextContainer>
          <S.FriendNameLink href={`/friends/${id}`}>
            {name} {secondName}
          </S.FriendNameLink>
          <S.FriendDescription>{description}</S.FriendDescription>
        </S.FriendTextContainer>
      </S.FriendLeftContainer>
      <UserButtons id={id} userData={userData} isSmall />
    </S.PoterntialFriendWrapper>
  );
};

export default PotentialFriend;
