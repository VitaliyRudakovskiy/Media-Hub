import Image from 'next/image'
import styled from 'styled-components'

import { flexBetween, flexCenter, flexColumn } from '@/theme/styles/mixins'

export const CommentContainer = styled.div`
  display: flex;
  font-size: 14px;
  gap: 10px;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.sectionBorderColor};
  }
`

export const MainContent = styled.div`
  ${flexColumn};
  gap: 3px;
  width: 100%;
  padding-bottom: 7px;
`

export const UserName = styled.p`
  font-weight: 500;
`

export const CommentText = styled.p``

export const BottomContent = styled.div`
  ${flexBetween};
`

export const CreatedAt = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryTextColor};
`

export const BottomLeftContent = styled.div`
  ${flexCenter};
  gap: 10px;
`

export const LikesContainer = styled.div`
  ${flexCenter};
  cursor: pointer;
`

export const LikeImage = styled(Image)`
  margin-right: 5px;
`

export const LikesCount = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 13px;
`

export const DeleteComment = styled.p`
  color: ${({ theme }) => theme.activeButtonColor};
  font-size: 13px;
  cursor: pointer;
`
