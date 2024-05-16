import Image from 'next/image'
import styled from 'styled-components'

import { flexBetween, flexColumn } from '@/theme/styles/mixins'

import { StyledActiveProps } from './types'

export const FAQContainer = styled.section`
  ${flexColumn};
  max-width: ${({ theme }) => theme.sizes.maxMainSectionWidth};
  gap: 15px;
  margin-bottom: 15px;
`

export const FAQItem = styled.div``

export const FAQTitle = styled.h2``

export const QuestionContainer = styled.div<StyledActiveProps>`
  ${flexBetween};
  padding: 10px 20px;
  border-radius: ${({ $isActive }) => ($isActive ? '8px 8px 0 0' : '8px')};
  background-color: ${({ theme }) => theme.sectionColor};
  cursor: pointer;
`

export const Question = styled.p``

export const ChevronImage = styled(Image)<StyledActiveProps>`
  transition: all 0.3s;
  transform: rotate(${({ $isActive }) => ($isActive ? '180deg' : '0')});
`

export const Answer = styled.p<StyledActiveProps>`
  padding: 20px;
  display: ${({ $isActive }) => ($isActive ? 'flex' : 'none')};
  max-height: ${({ $isActive }) => ($isActive ? 200 : 0)}px;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  background-color: ${({ theme }) => theme.sectionColor};
  border-radius: ${({ $isActive }) => ($isActive ? '0 0 8px 8px' : '0')};
`
