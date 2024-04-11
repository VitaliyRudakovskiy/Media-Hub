import styled from 'styled-components';

import { flexCenter } from '@/theme/styles/mixins';

export const ToggleContainer = styled.div`
  ${flexCenter};
  position: relative;
  width: 60px;
  height: 32px;
`;

export const Label = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  border-radius: 32px;
  cursor: pointer;
`;

export const Slider = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0.25rem;
    left: 0.3rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    box-shadow: inset 8px -3px 0px 0px yellow;
    transition: 0.3s;
  }
`;

export const Input = styled.input`
  position: absolute;
  display: none;

  &:checked ~ ${Slider}::before {
    transform: translateX(1.7rem);
    background-color: ${({ theme }) => theme.inputPlaceholderColor};
    box-shadow: none;
  }
`;
