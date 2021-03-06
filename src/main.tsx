import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './pages/Dashboard'
import { GlobalStyle } from './global/styles/GlobalStyle'
import theme from './global/styles/theme'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
     </ThemeProvider>
  </React.StrictMode>
)
