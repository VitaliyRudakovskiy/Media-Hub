import styled from 'styled-components'

import { flexCenter, PageContainer } from '@/theme/styles/mixins'

export const UserProfileWrapper = styled.section`
  ${PageContainer};
  gap: 10px;
`

export const CenterSection = styled.div`
  width: 100%;
  flex: 1;
`

export const PostsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`

export const FeedWrapper = styled.div`
  ${flexCenter};
  flex: 1;
`
