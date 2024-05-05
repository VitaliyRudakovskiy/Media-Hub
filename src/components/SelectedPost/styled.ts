import styled from 'styled-components'

export const PostContainer = styled.section`
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  padding: 16px 20px;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 10px;
`
