import styled from 'styled-components'

import { flexCenter } from '@/theme/styles/mixins'

export const ModalOverlay = styled.div`
  ${flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContainer = styled.div`
  ${flexCenter};
  gap: 20px;
  flex-direction: column;
  position: relative;
  width: 85%;
  max-width: 500px;
  padding: 20px 25px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.backgroundColor} 3px 3px 15px 3px;
  background-color: ${({ theme }) => theme.sectionColor};
`

export const ModalTitle = styled.h2`
  text-align: center;
`

export const ModalSubtitle = styled.p`
  text-align: center;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 40px;
  color: ${({ theme }) => theme.secondaryTextColor};
  background: transparent;
  border: none;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.redButtonColor};
  }
`

export const ButtonsContainer = styled.div`
  ${flexCenter}
  gap: 20px;
`

export const ConfirmButton = styled.button`
  ${flexCenter};
  font-family: inherit;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.redButtonColor};
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(90%);
  }
`
