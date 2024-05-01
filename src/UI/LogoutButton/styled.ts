import styled from 'styled-components'

import { flexCenter } from '@/theme/styles/mixins'

const StyledButton = styled.button`
  ${flexCenter};
  align-self: center;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  background-color: #98120f;
  color: white;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #98520f;
  }
`

export default StyledButton
