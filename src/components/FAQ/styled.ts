import Image from 'next/image'
import styled from 'styled-components'

import { flexBetween, flexColumn } from '@/theme/styles/mixins'

export const FAQContainer = styled.section`
  ${flexColumn};
  gap: 15px;
`

export const FAQItem = styled.div``

export const QuestionContainer = styled.div`
  ${flexBetween}
  padding: 10px 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.sectionColor};
  cursor: pointer;
`

export const Question = styled.p``

export const ChevronImage = styled(Image)``

export const Answer = styled.p``
