import styled from 'styled-components'

import { flexBetween, PageContainer } from '@/theme/styles/mixins'

export const SupportWrapper = styled.section`
  ${PageContainer};
  gap: 10px;
`

export const CenterSection = styled.div`
  ${flexBetween};
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`
