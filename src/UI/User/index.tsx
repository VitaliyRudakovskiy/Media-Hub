import { memo } from 'react';

import { UserWithId } from '@/types/user';

import DynamicAvatar from '../Avatars/DynamicAvatar';
import UserButtons from '../UserButtons';

import * as S from './styled';

const User = ({ id, userData }: UserWithId) => {
  const { email, name, secondName, description } = userData;

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
      <UserButtons id={id} userData={userData} />
    </S.UserWrapper>
  );
};

export default memo(User);
