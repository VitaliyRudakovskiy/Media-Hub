import Image from 'next/image'
import styled from 'styled-components'

import { flexCenter } from '@/theme/styles/mixins'

import { StyledAvatarContainerProps, StyledAvatarProps, StyledInitialsProps } from './types'

export const AvatarContainer = styled.div<StyledAvatarContainerProps>`
  ${flexCenter};
  position: relative;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  min-height: ${({ $width }) => $width}px;
  min-width: ${({ $height }) => $height}px;
`

export const AvatarPhoto = styled(Image)<StyledAvatarProps>`
  border-radius: 50%;
  border: ${({ theme, $isBordered }) => $isBordered && `4px solid ${theme.sectionColor}`};
`

export const Initials = styled.p<StyledInitialsProps>`
  font-size: ${({ $initialsFontSize }) => $initialsFontSize};
  font-weight: 500;
`
