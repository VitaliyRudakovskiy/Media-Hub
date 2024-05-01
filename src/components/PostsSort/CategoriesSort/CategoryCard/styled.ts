import styled from 'styled-components'

import { StyledCategoryCardProps } from './types'

export const Card = styled.div<StyledCategoryCardProps>`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.activeButtonColor : theme.sectionBorderColor)};
  color: ${({ theme, $isActive }) => ($isActive ? 'white' : theme.textColor)};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.activeButtonColor : 'transparent'};
  cursor: pointer;
`
