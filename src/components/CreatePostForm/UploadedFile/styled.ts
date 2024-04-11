import styled from 'styled-components';

import { flexCenter } from '@/theme/styles/mixins';

export const FileContainer = styled.div`
  ${flexCenter};
  gap: 10px;
`;

export const FileName = styled.p``;

export const RemoveButton = styled.button`
  ${flexCenter};
  border: none;
  background-color: ${({ theme }) => theme.sectionBorderColor};
  color: ${({ theme }) => theme.textColor};
  font-size: 20px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.inputBackgroundColor};
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }
`;
