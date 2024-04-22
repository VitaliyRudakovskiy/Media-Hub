import styled from 'styled-components';

import { flexColumn } from '@/theme/styles/mixins';

export const CommonContainer = styled.section``;

export const UsersFeedWrapper = styled.div`
  ${flexColumn};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  padding: 16px 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 850px;
  margin-bottom: 10px;
`;

export const UsersFeedTitle = styled.h2``;
