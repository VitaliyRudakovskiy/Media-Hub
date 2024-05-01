import styled from 'styled-components'

import { flexBetween } from '@/theme/styles/mixins'

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
  height: 250px;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(188deg, rgba(30, 159, 102, 1) 0%, rgba(15, 66, 73, 1) 100%);
`

export const ProfileInfo = styled.div`
  ${flexBetween};
  position: relative;
  padding: 30px 20px;
`

export const AvatarContainer = styled.div`
  position: absolute;
  bottom: 20px;
`

export const Username = styled.h3`
  margin-left: 150px;
`
