import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Footer from './components/Footer'

import Routes from './routes'

import { theme } from './styles/colors'
import GlobalStyle from './styles/global'

import './config/ReactotronConfig'

import store from './store'

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
          <Footer />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default App
