import styled from 'styled-components'

import { flexColumn } from '@/theme/styles/mixins'

export const SortSearchContainer = styled.section`
  ${flexColumn};
  position: sticky;
  top: 90px;
  min-width: 290px;
  max-width: 290px;
  gap: 10px;
`
