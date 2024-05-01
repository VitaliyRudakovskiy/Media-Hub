import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: ${({ theme }) => theme.textColor};

  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`

export const StyledImage = styled(Image)``
