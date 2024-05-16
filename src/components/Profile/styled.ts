import styled, { css } from 'styled-components'

import { flexBetween, flexColumn } from '@/theme/styles/mixins'

import { StyledSecondaryTextProps } from './types'

export const ProfileWrapper = styled.div`
  background-color: ${({ theme }) => theme.sectionColor};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  width: 100%;
  margin: 0 10px 10px 0;
`

export const BackgroundColorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(188deg, rgba(30, 159, 102, 1) 0%, rgba(15, 66, 73, 1) 100%);
`

export const LeftSection = styled.div`
  ${flexColumn};
  flex: 1;
  padding: 20px 0 25px 0;
`

export const UserDescriptionContainer = styled.div`
  ${flexColumn};
  gap: 15px;
  margin-top: 20px;
  max-width: 90%;
`

export const ProfileInfo = styled.div`
  ${flexBetween};
  align-items: flex-start;
  position: relative;
  padding: 0 30px;
`

export const AvatarContainer = styled.div`
  position: absolute;
  top: -95px;
`

export const Username = styled.h3`
  margin-left: 160px;
`

export const ButtonsContainer = styled.div`
  ${flexColumn};
  align-items: flex-end;
  gap: 10px;
  padding: 25px 0;
`

export const SecondaryText = styled.span<StyledSecondaryTextProps>`
  color: ${({ theme }) => theme.textColor};

  ${({ $withHover, theme }) =>
    $withHover &&
    css`
      color: ${({ theme }) => theme.secondaryTextColor};
      transition: color 0.2s;
      cursor: pointer;

      &:hover {
        color: ${theme.textColor};
      }
    `}
`
