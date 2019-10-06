import styled from 'styled-components'

export const Container = styled.section`
  font-size: 20px;
  margin: 20px 15px;

  svg {
    margin-right: 20px;
  }

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    font-size: 25px;
    margin: 60px 100px;
    svg {
      display: none;
    }
  }
`

export const List = styled.ul`
  list-style:none;

  li+li::before {
    font-weight: 300;
    padding: 18px;
  }

  li {
    font-weight: 900;
    color: ${props => props.theme.blueSecundary};
    display: none;
  }

  li:nth-last-child(2) {
    display: inline;
  }

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    li {
      display: inline;
    }

    li:last-child {
      color: black;
      font-weight: 300;
    }

    li+li::before {
      font-weight: 300;
      padding: 18px;
      color: black;
      content: "/";
    }
  }
`
