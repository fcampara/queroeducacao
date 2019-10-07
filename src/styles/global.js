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
    overflow-x: hidden;
  }


  #root {
    height: 100vh;
    width: 100vw;
    font-family: proxima-nova, Arial, Helvetica, sans-serif;
    color: ${props => props.theme.textColor};
  }

  button {
    margin: 4px 4px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    height: 50px;
    font-weight: 900;
    font-size: 20px;
    padding: 0 25px;
    cursor: pointer;
    border-radius: 5px;
  }

  #main {
    margin: 20px 15px;
    min-height: calc(100vh - 503px);
  }

  .flex {
    display: flex;
  }

  .column {
    flex-direction: column;
  }

  .align-center {
    align-items: center;
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

  .capitalize {
    text-transform: uppercase;
  }

  .line-through {
    text-decoration: line-through;
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

    #main {
      margin: 60px 100px;
      min-height: calc(100vh - 620px);
    }
  }
`
