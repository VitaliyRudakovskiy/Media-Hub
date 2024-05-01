import styled from 'styled-components'

export const UsersSortSection = styled.div`
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  max-width: ${({ theme }) => theme.sizes.maxSearchSectionWidth};
  border-radius: 12px;
  padding: 8px;
`

export const Tile = styled.div`
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;

  &.activeTile {
    background-color: ${({ theme }) => theme.hoverColor};
  }

  &:hover {
    background-color: ${({ theme }) => theme.activeColor};
  }
`
