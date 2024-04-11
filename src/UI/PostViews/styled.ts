import Image from 'next/image';
import styled from 'styled-components';

import { flexCenter } from '@/theme/styles/mixins';

export const ViewContainer = styled.div`
  ${flexCenter};
  gap: 7px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export const Eye = styled(Image)`
  width: 20px;
  height: 20px;
`;
