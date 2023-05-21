// components
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'

// theme
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="sucess" />

      <GlobalStyle />
    </ThemeProvider>
  )
}
