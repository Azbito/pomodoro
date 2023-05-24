// contexts providers
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

// theme
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
