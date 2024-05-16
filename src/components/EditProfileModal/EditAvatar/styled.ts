import styled from 'styled-components'

import { flexCenter, flexColumn } from '@/theme/styles/mixins'

export const EditAvatarContainer = styled.div`
  ${flexCenter};
  gap: 15px;
`

export const AvatarContainer = styled.div`
  ${flexCenter};
  position: relative;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  width: 100px;
  height: 100px;
`

export const Initials = styled.p`
  font-size: 42px;
  font-weight: 500;
`

export const UploadFileLabel = styled.label`
  margin-right: 5px;
  cursor: pointer;
`

export const InputForFile = styled.input`
  visibility: hidden;
  width: 0;
  opacity: 0;
`

export const ButtonsContainer = styled.div`
  ${flexColumn};
  align-items: flex-start;
  gap: 15px;
`

export const FileContainer = styled.div`
  ${flexCenter};
  gap: 10px;
`

export const FileName = styled.p`
  color: ${({ theme }) => theme.seciondaryTextColor};
`

export const RemoveButton = styled.button`
  ${flexCenter};
  border: none;
  background-color: ${({ theme }) => theme.sectionBorderColor};
  color: ${({ theme }) => theme.textColor};
  font-size: 20px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.inputBackgroundColor};
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }
`
