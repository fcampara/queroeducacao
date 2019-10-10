import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Breadcrumbs from './components/Breadcrumbs'

import Routes from './routes'

import { theme } from './styles/theme'
import GlobalStyle from './styles/global'

import store from './store'

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Header />
            <Menu />
            <Breadcrumbs />
          </div>
          <div id='main'>
            <Routes />
          </div>
          <Footer />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default App
