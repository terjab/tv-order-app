import { createGlobalStyle } from 'styled-components'
import logo from './common/img/background-logo.jpg'
import theme from './common/theme'

const GlobalStyles = createGlobalStyle`
  html {
    background-image: url(${logo});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  body {
    font-size: ${theme.size.small};
    background-color: transparent;
    font-family: ${theme.fonts.quicksand};
    padding-bottom: ${theme.size.xxLarge};
  }
`

export default GlobalStyles
