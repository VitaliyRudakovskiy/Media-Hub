import Link from 'next/link'
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

export const ShowMore = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.activeButtonColor};
`
