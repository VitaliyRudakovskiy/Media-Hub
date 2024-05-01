import Image from 'next/image'
import styled from 'styled-components'

export const SearchContainer = styled.section`
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  max-width: ${({ theme }) => theme.sizes.maxSearchSectionWidth};
  border-radius: 12px;
  padding: 16px;
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

export const SearchInput = styled.input`
  width: 100%;
  font-family: inherit;
  font-size: 16px;
  padding: 10px 15px;
  border: 1px solid ${({ theme }) => theme.inputBackgroundColor};
  border-radius: 6px 0 0 6px;
  background-color: inherit;
  color: inherit;
`

export const SearchButton = styled.button`
  border: 1px solid ${({ theme }) => theme.inputBackgroundColor};
  border-radius: 0 6px 6px 0;
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  padding: 3px;
  cursor: pointer;
`

export const Icon = styled(Image)``

export const CrossIcon = styled(Image)`
  position: absolute;
  right: 50px;
  top: 10px;
  cursor: pointer;
`
