import styled from 'styled-components'

export const MayBeFriendsContainer = styled.section`
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  position: sticky;
  top: 90px;
  padding: 16px 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 330px;
  min-width: 330px;
`

export const MayBeFriendsTitle = styled.h3`
  margin-bottom: 10px;
`

export const PotentialFriendsContainer = styled.div`
  margin-bottom: 10px;
`
