import Image from 'next/image'
import styled from 'styled-components'

import { flexColumn } from '@/theme/styles/mixins'
import Button from '@/UI/Button'

import { FormFocused } from './types'

export const CreateForm = styled.form`
  position: relative;
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  border-radius: 12px;
  padding: 12px 16px 12px 12px;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxMainSectionWidth};
  margin-bottom: 10px;
`

export const MainContent = styled.div<FormFocused>`
  display: flex;
  align-items: ${({ $isFormFocused }) => ($isFormFocused ? 'flex-start' : 'center')};
`

export const ExpandedContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
  padding-bottom: 8px;
`

export const InfoContainer = styled.div`
  ${flexColumn};
  flex: 1;
  padding: 0 10px;
`

export const Textarea = styled.textarea`
  font-family: inherit;
  font-size: 16px;
  margin-top: 20px;
  resize: none;
  overflow: hidden;
  border: none;
  background-color: inherit;
  color: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }
`

export const TagsInput = styled.input`
  margin-top: 20px;
  padding: 10px 0;
  font-family: inherit;
  font-size: 16px;
  border: none;
  background-color: inherit;
  color: inherit;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const SubmitButton = styled(Button)``

export const VisibilityButton = styled(Button)``

export const TitleInput = styled.input`
  font-family: inherit;
  font-weight: 500;
  font-size: 19px;
  border: none;
  background-color: inherit;
  color: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }
`

export const FilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const UploadFileLabel = styled.label`
  margin: 5px 5px 0 0;
`

export const InputForFile = styled.input`
  visibility: hidden;
  width: 0;
  opacity: 0;
`

export const UploadFile = styled(Image)`
  cursor: pointer;
`

export const ErrorMessage = styled.p``
