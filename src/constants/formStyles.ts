import Link from 'next/link'
import styled from 'styled-components'

import { flexColumn } from '@/theme/styles/mixins'

export const Form = styled.form`
  ${flexColumn};
  align-items: center;
  gap: 15px;
  padding: 20px 30px;
  border-radius: 15px;
`

export const Header = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
`

export const InputsContainer = styled.div`
  ${flexColumn};
  width: 370px;

  @media (max-width: ${({ theme }) => theme.sizes.px450}) {
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  margin-bottom: 10px;
`

export const Error = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.errorColor};
`

export const LinkToOtherForm = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue300};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.blue100};
  }
`
