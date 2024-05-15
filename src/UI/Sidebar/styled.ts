import styled from 'styled-components'

import { flexColumn } from '@/theme/styles/mixins'

export const SidebarWrapper = styled.aside`
  ${flexColumn}
  position: fixed;
  z-index: 10;
`
