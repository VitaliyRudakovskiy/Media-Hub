import styled from 'styled-components'

import { flexColumn, PageContainer } from '@/theme/styles/mixins'

export const BookmarksWrapper = styled.section`
  ${PageContainer};
  gap: 10px;
`

export const CenterSection = styled.div`
  ${flexColumn};
  align-items: center;
  gap: 10px 0;
  width: 100%;
`
