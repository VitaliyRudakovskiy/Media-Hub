import Image from 'next/image'
import styled from 'styled-components'

import { StyledImageProps } from './types'

export const FilesContainer = styled.div`
  display: flex;
`

export const StyledImageWrapper = styled.div<StyledImageProps>`
  position: relative;
  cursor: pointer;

  ${({ $toDelete }) =>
    $toDelete &&
    `
    opacity: 0.3;

    &::after {
      content: 'x';
      position: absolute;
      color: white;
      top: 0;
      left: 0;
      transform: translate(125%, -10%);
      font-size: 5rem;
    }
  `}
`

export const StyledImage = styled(Image)`
  margin-right: 10px;
`
