import styled from 'styled-components'

import { flexColumn } from '@/theme/styles/mixins'

export const SortContainer = styled.section`
  ${flexColumn};
  gap: 10px;
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  max-width: ${({ theme }) => theme.sizes.maxSearchSectionWidth};
  border-radius: 12px;
  padding: 16px;
`

export const SortTitle = styled.h3``
