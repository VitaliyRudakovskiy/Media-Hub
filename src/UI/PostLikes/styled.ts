import Image from 'next/image'
import styled from 'styled-components'

import { flexCenter } from '@/theme/styles/mixins'

export const LikesContainer = styled.div`
  ${flexCenter};
  gap: 5px;
  background-color: ${({ theme }) => theme.hoverColor};
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.inputBackgroundColor};
  }
`

export const LikesImage = styled(Image)``

export const Count = styled.span``
