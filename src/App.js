import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'

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
          <Header />
          <Menu />
          <Routes />
          <Footer />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default App
