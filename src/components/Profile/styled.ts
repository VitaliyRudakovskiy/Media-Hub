import Image from 'next/image';
import styled from 'styled-components';

import { flexBetween } from '@/theme/styles/mixins';

export const ProfileWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  border-radius: 12px;
  width: 100%;
  margin-bottom: 10px;
`;

export const BackgroundImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: 250px;
`;

export const ProfileInfo = styled.div`
  ${flexBetween};
  position: relative;
  padding: 30px 20px;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  bottom: 20px;
`;

export const Username = styled.h3`
  margin-left: 150px;
`;
