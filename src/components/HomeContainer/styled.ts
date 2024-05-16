import styled from 'styled-components'

import { flexColumn, PageContainer } from '@/theme/styles/mixins'

export const HomeWrapper = styled.section`
  ${PageContainer};
  gap: 10px;
`

export const CenterSection = styled.div`
  ${flexColumn};
  align-items: center;
  width: 100%;
`
