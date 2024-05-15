import { DefaultTheme } from 'styled-components'

import COLORS from './styles/colors'
import SIZES from './styles/sizes'

const BASE_THEME = {
  colors: {
    ...COLORS,
  },
  sizes: {
    ...SIZES,
  },
}

export const darkTheme: DefaultTheme = {
  ...BASE_THEME,

  backgroundColor: COLORS.gray900,
  textColor: COLORS.gray300,
  secondaryTextColor: COLORS.gray500,
  sectionColor: COLORS.gray800,
  sectionBorderColor: COLORS.gray650,
  activeColor: COLORS.gray700,
  hoverColor: COLORS.gray600,
  inputBackgroundColor: COLORS.gray550,
  inputPlaceholderColor: COLORS.gray450,
  primaryButtonBackgroundColor: COLORS.gray300,
  primaryButtonTextColor: COLORS.gray800,
  secondaryButtonBackgroundColor: COLORS.gray675,
  secondaryButtonTextColor: COLORS.gray300,
  redButtonColor: COLORS.red,
  activeButtonColor: COLORS.blue100,
  errorColor: COLORS.orange,
  linkColor: COLORS.blue100,
}

export const lightTheme: DefaultTheme = {
  ...BASE_THEME,

  backgroundColor: COLORS.white200,
  textColor: COLORS.black,
  secondaryTextColor: COLORS.gray400,
  sectionColor: COLORS.white,
  sectionBorderColor: COLORS.white400,
  activeColor: COLORS.white100,
  hoverColor: COLORS.white300,
  inputBackgroundColor: COLORS.white200,
  inputPlaceholderColor: COLORS.gray400,
  primaryButtonBackgroundColor: COLORS.blue300,
  primaryButtonTextColor: COLORS.white,
  secondaryButtonBackgroundColor: COLORS.white150,
  secondaryButtonTextColor: COLORS.blue300,
  redButtonColor: COLORS.red,
  activeButtonColor: COLORS.blue300,
  errorColor: COLORS.red100,
  linkColor: COLORS.blue300,
}
