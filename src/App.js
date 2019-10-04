import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { theme } from './styles/colors'
import GlobalStyle from './styles/global'

import './config/ReactotronConfig'

import store from './store'

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <h1>Hello world</h1>
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default App
