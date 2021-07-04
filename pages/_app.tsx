import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../src/contexts/authContext'

import GlobalStyle from '../src/styles/global'

import dark from '../src/styles/themes/dark'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={dark}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}
