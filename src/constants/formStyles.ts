import Image from 'next/image'
import styled from 'styled-components'

import { flexColumn } from '@/theme/styles/mixins'

export const Form = styled.form`
  ${flexColumn};
  gap: 15px;
  padding: 15px 30px;
  border: 1px solid saddlebrown;
  border-radius: 15px;
`

export const Picture = styled(Image)`
  width: 80px;
  height: auto;
`

export const Header = styled.h2``

export const InputsContainer = styled.div``

export const InputWrapper = styled.div`
  margin-bottom: 10px;
`

export const Error = styled.p``
