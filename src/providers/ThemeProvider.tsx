'use client'

import { useSelector } from 'react-redux'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { selectTheme } from '@/store/slices/themeSlice'
import GlobalStyle from '@/theme/styles/globals'
import { darkTheme, lightTheme } from '@/theme/theme'
import { ChildrenProps } from '@/types/childrenType'

const ThemeProvider = ({ children }: ChildrenProps) => {
  const currentTheme = useSelector(selectTheme)

  return (
    <StyledThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
