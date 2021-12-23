import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
)
