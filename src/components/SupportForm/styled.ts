import styled from 'styled-components'

import { flexColumn } from '@/theme/styles/mixins'

export const SupportForm = styled.form`
  ${flexColumn};
  width: ${({ theme }) => theme.sizes.maxMainSectionWidth};
`

export const TopicSelect = styled.select`
  font-family: inherit;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.sectionColor};
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
`

export const Label = styled.p`
  margin-bottom: 5px;
`

export const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.sectionColor};
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  font-family: inherit;
  font-size: 15px;
  resize: none;
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 15px;
  outline: none;
`

export const Title = styled.h2`
  margin-bottom: 15px;
`

export const SubTitle = styled.h3`
  margin-bottom: 15px;
`
