import Image from 'next/image'
import styled, { css } from 'styled-components'

import { IArrowStyledProps, IStyledsSelectProps } from './types'

export const StyledSelectContainer = styled.div<IStyledsSelectProps>`
  position: relative;
  width: ${({ $width }) => $width};
  display: flex;
  align-items: center;
`

export const StyledSelect = styled.select`
  font-family: inherit;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  color: ${({ theme }) => theme.textColor};
  appearance: none;
  width: 100%;
  cursor: pointer;
`

export const StyledOption = styled.option``

export const ArrowImage = styled(Image)<IArrowStyledProps>`
  position: absolute;
  right: 10px;
  top: 12px;
  transition: all 0.3s;

  ${({ $isOpened }) =>
    $isOpened &&
    css`
      transform: rotate(180deg);
    `}
`
