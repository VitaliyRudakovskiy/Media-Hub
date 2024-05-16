import styled from 'styled-components'

import { flexColumn } from '@/theme/styles/mixins'

export const FeedbackContainer = styled.div`
  ${flexColumn};
  margin-bottom: 10px;
`

export const Feedback = styled.p`
  line-height: 1.6;
  overflow-wrap: break-word;
`

export const ShowMore = styled.p`
  font-weight: 500;
  margin-top: 5px;
  color: ${({ theme }) => theme.activeButtonColor};
  cursor: pointer;
`
