import styled from 'styled-components';

import { flexCenter } from '@/theme/styles/mixins';

import { StyledButtonProps } from './types';

const StyledButton = styled.button<StyledButtonProps>`
  ${flexCenter};
  gap: 10px;
  width: ${({ $width }) => $width};
  font-family: inherit;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme, $variant }) =>
    $variant === 'primary'
      ? theme.primaryButtonBackgroundColor
      : theme.secondaryButtonBackgroundColor};
  color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.primaryButtonTextColor : theme.secondaryButtonTextColor};
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }

  &:hover {
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(90%);
  }
`;

export default StyledButton;
