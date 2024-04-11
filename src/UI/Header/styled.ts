import Image from 'next/image';
import styled from 'styled-components';

import { flexBetween, flexCenter } from '@/theme/styles/mixins';

export const HeaderWrapper = styled.header`
  ${flexBetween}
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.sectionColor};
  border-bottom: 1px solid ${({ theme }) => theme.sectionBorderColor};
`;

export const StyledImage = styled(Image)`
  width: 50px;
  height: auto;
  margin-right: 15px;
`;

export const LeftPart = styled.div`
  ${flexCenter};
`;

export const RightPart = styled.div`
  ${flexCenter};
  gap: 20px;
`;
