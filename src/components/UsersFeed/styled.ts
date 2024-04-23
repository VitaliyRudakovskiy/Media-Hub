import styled from 'styled-components';

import { flexColumn } from '@/theme/styles/mixins';

export const CommonContainer = styled.section`
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  padding: 16px 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 750px;
  margin-bottom: 10px;
`;

export const UsersFeedWrapper = styled.div`
  ${flexColumn};
  align-items: center;
  justify-content: center;
`;

export const UsersFeedTitle = styled.h2``;

export const NoUsers = styled.p``;
