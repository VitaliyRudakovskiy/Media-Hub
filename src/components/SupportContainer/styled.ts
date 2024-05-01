import styled from 'styled-components'

import { flexBetween, PageContainer } from '@/theme/styles/mixins'

export const SupportWrapper = styled.section`
  ${PageContainer};
`

export const CenterSection = styled.div`
  ${flexBetween};
  align-items: flex-start;
  gap: 10px 0;
  width: 100%;
`
