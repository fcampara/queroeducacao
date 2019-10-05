import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
  height: 45px;
  background: ${({ theme }) => theme.bluePrimary};

  ul {
    list-style:none;
  }

  ul li:nth-child(1) {
    display: inline;
  }

  ul li {
    display: none;
    color: #fff;
    padding: 10px;
  }

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    ul li {
      display: inline;
    }
  }
`

export const Menu = styled.div`
  padding: 10px;
`
