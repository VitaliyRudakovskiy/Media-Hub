import Image from 'next/image'
import styled from 'styled-components'

import { flexBetween, flexCenter } from '@/theme/styles/mixins'

import { StyledHeaderProps } from './types'

export const HeaderWrapper = styled.header<StyledHeaderProps>`
  ${flexBetween}
  position: fixed;
  width: 100%;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.sectionColor};
  border-bottom: 1px solid ${({ theme }) => theme.sectionBorderColor};
  z-index: 3;
  opacity: ${({ $opacity }) => $opacity};
`

export const StyledImage = styled(Image)`
  margin-right: 15px;
`

export const LeftPart = styled.div`
  ${flexCenter};
`

export const RightPart = styled.div`
  ${flexCenter};
  gap: 20px;
`

export const AvatarContainer = styled.div`
  cursor: pointer;
`
