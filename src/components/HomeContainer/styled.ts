import styled from 'styled-components';

import { flexColumn, PageContainer } from '@/theme/styles/mixins';

export const HomeWrapper = styled.section`
  ${PageContainer};
`;

export const CenterSection = styled.div`
  ${flexColumn};
  align-items: center;
  gap: 10px 0;
  width: 100%;
`;
