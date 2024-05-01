import Image from 'next/image'
import styled from 'styled-components'

import { flexBetween } from '@/theme/styles/mixins'

export const PostWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  padding: 16px 20px;
  border-radius: 12px;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxMainSectionWidth};
  margin-bottom: 10px;
`

export const TopSection = styled.div`
  ${flexBetween};
`

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const PostInfo = styled.div`
  flex: 1;
`

export const UserName = styled.p``

export const Date = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 14px;
`

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const MainSection = styled.div`
  padding: 8px 0 4px 0;
`

export const Title = styled.h2``

export const MainText = styled.div`
  line-height: 1.6;
  margin-bottom: 10px;
`

export const Category = styled.p``

export const ImageSection = styled.div``

export const SingleImage = styled.img`
  width: 100%;
  height: auto;
`

export const NumbersSection = styled.div`
  ${flexBetween};
`

export const ReactionsSection = styled.div`
  display: flex;
  gap: 5px;
`

export const CommentsSection = styled.div``
