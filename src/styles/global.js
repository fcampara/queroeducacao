import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    height: 100vh;
    width: 100vw;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`
