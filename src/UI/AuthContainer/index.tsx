'use client';

import { ChildrenProps } from '@/types/childrenType';

import StyledContainer from './styled';

const AuthContainer = ({ children }: ChildrenProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default AuthContainer;
