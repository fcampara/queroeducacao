import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    background: ${props => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100vh;
    width: 100vw;
    font-family: proxima-nova, Arial, Helvetica, sans-serif;
    color: ${props => props.theme.textColor};
  }

  button {
    cursor: pointer;
  }

  .flex {
    display: flex;
  }

  .bg-primary {
    background: ${props => props.theme.bluePrimary}
  }

  .bg-secundary {
    background: ${props => props.theme.blueSecundary}
  }

  .text-white {
    color: #FFF;
  }

  .bold {
    font-weight: 900;
  }

  svg.large {
    font-size: 50px;
  }

  svg.medium {
    font-size: 35px;
  }

  full-width {
    width: 100%!important
  }

  full-heigth {
    height: 100%!important
  }

  .text {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    flex-direction: column;
    align-items: flex-start;

    p:first-child {
      margin-bottom: 5px;
    }
  }

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    .hide-responsive {
      display: none!important;
    }
  }
`
