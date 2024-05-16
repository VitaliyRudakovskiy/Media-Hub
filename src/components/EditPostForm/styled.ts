import styled from 'styled-components'

import { flexCenter } from '@/theme/styles/mixins'

export const EditPostFormOverlay = styled.section`
  ${flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
`

export const EditPostFormWrapper = styled.form`
  position: relative;
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  padding: 16px 20px;
  border-radius: 12px;
  margin: 0 auto;
  width: 90%;
  max-width: 600px;
`

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 15px;
  font-size: 40px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.secondaryTextColor};
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: red;
  }
`

export const StarContainer = styled.div`
  margin-top: 10px;
`

export const Label = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
  margin-bottom: 5px;
  margin-top: 10px;
`

export const Error = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.errorColor};
`
