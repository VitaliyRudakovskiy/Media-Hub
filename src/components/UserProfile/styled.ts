import styled from 'styled-components'

import { flexBetween, flexColumn } from '@/theme/styles/mixins'

export const UserProfileWrapper = styled.section`
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  border-radius: 12px;
  width: 100%;
  margin: 0 10px 10px 0;
`

export const LeftSection = styled.div`
  ${flexColumn};
  flex: 1;
`

export const BackgroundColorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(188deg, rgba(302, 159, 102, 1) 0%, rgba(125, 66, 73, 1) 100%);
`

export const ProfileInfo = styled.div`
  ${flexBetween};
  align-items: flex-start;
  position: relative;
  padding: 20px 30px;
`

export const AvatarContainer = styled.div`
  position: absolute;
  top: -95px;
`

export const Username = styled.h3`
  margin-left: 160px;
`

export const UserDescriptionContainer = styled.div`
  ${flexColumn};
  gap: 15px;
  margin-top: 20px;
  max-width: 90%;
`

export const SecondaryText = styled.span`
  color: ${({ theme }) => theme.textColor};
`
