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

export const MainSection = styled.div`
  padding: 8px 0 4px 0;
`

export const Title = styled.h2`
  overflow-wrap: break-word;
  margin-bottom: 10px;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`

export const Rating = styled.span`
  font-weight: 600;
  font-size: 18px;
  margin-right: 5px;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

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
