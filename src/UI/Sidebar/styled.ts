import styled from 'styled-components'

import { flexColumn } from '@/theme/styles/mixins'

export const SidebarWrapper = styled.aside`
  ${flexColumn}
  position: sticky;
  top: 90px;
  z-index: 10;
`
