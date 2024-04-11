import styled from 'styled-components';

import { flexCenter } from '@/theme/styles/mixins';

export const EditAvatarContainer = styled.div`
  ${flexCenter};
`;

export const AvatarContainer = styled.div`
  ${flexCenter};
  position: relative;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  width: 100px;
  height: 100px;
`;

export const Initials = styled.p`
  font-size: 42px;
  font-weight: 500;
`;

export const UploadFileLabel = styled.label`
  margin-right: 5px;
  cursor: pointer;
`;

export const InputForFile = styled.input`
  visibility: hidden;
  width: 0;
  opacity: 0;
`;
