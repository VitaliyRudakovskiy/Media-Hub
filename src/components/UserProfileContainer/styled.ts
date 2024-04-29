import styled from 'styled-components';

import { PageContainer } from '@/theme/styles/mixins';

export const UserProfileWrapper = styled.section`
  ${PageContainer};
`;

export const CenterSection = styled.div`
  width: 100%;
`;

export const PostsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;
