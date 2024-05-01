import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { flexCenter, flexColumn } from '@/theme/styles/mixins'

export const PoterntialFriendWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
`

export const FriendLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 78%;
`

export const FriendTextContainer = styled.div`
  ${flexColumn};
  font-size: 14px;
  line-height: 1.2;
  gap: 5px;
  text-align: justify;
`

export const FriendNameLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
  font-size: 17px;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.secondaryTextColor};
  }
`

export const FriendDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const AddFriendButton = styled.div`
  ${flexCenter};
  border-radius: 50%;
  padding: 10px;
  width: 40px;
  height: 40px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
    box-shadow: 0px 1px 13px 2px ${({ theme }) => theme.hoverColor};
  }
`

export const AddFriendPicture = styled(Image)``
