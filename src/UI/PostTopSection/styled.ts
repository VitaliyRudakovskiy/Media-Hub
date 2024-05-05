import Image from 'next/image'
import styled from 'styled-components'

import { flexBetween } from '@/theme/styles/mixins'

export const TopSection = styled.div`
  ${flexBetween};
  align-items: flex-start;
`

export const TopIconsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const UserSection = styled.div`
  display: flex;
  align-items: center;
`

export const AvatarContainer = styled.div`
  margin-right: 10px;
`

export const PostInfo = styled.div`
  flex: 1;
`

export const UserName = styled.span`
  font-weight: 500;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const Date = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 14px;
`

export const Icon = styled(Image)`
  cursor: pointer;
`
