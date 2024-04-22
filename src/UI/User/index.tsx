import { memo } from 'react';

import DynamicAvatar from '../Avatars/DynamicAvatar';

import * as S from './styled';
import { UserProps } from './types';
import UserButtons from './UserButtons';

const User = ({ id, userData, userType }: UserProps) => {
  const { email, name, secondName, description } = userData;

  return (
    <S.UserWrapper>
      <DynamicAvatar email={email} width={80} height={80} initialsFontSize='38px' />
      <S.TextContainer>
        <S.UserName>
          {name} {secondName}
        </S.UserName>
        <S.UserDescription>{description}</S.UserDescription>
      </S.TextContainer>
      <UserButtons userType={userType} />
    </S.UserWrapper>
  );
};

export default memo(User);
