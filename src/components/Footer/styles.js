import styled from 'styled-components'

export const Container = styled.footer`
  background: ${props => props.theme.bluePrimary};
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .col {
    height: 100px
  }

  .row {
    display: flex!important;
    flex-direction: column;
    margin-left: 20px;
  }

  .text {
    display: none!important;
  }

  .col:nth-child(1) {
    flex-basis: 100%;
    margin-bottom: 1px;
  }

  .col:nth-child(2) {
    flex-basis: 33.33%;
    flex-direction: column;
  }

  .col:nth-child(3) {
    margin: 2px;
    flex-basis: 31.33%;
    flex-direction: column;
  }

  .col:nth-child(4) {
    flex-basis: 33.83%;
    flex-direction: column;
  }

  .col:nth-child(5) > svg {
    font-size: 23px;
    margin: 0 7px 0 7px;
  }

  .col > p {
    margin-top: 10px;
  }

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    .title {
      display: none;
    }

    .text {
      display: flex!important;
    }

    .col:nth-child(1) {
      flex-basis: 25%;
      margin-bottom: 0px;
      flex-direction: row;

    }

    .col:nth-child(2) {
      flex-basis: 25%;
      flex-direction: row;
    }

    .col:nth-child(3) {
      margin: 0px;
      flex-basis: 25%;
      flex-direction: row;
    }

    .col:nth-child(4) {
      flex-basis: 25%;
      flex-direction: row;
    }
  }
`

export const Card = styled.div`
  display: flex;
  color: #FFF;
  align-items: center;
  justify-content: center;

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
`
