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
    margin-left: 15px;
  }

  ul li:nth-child(1) {
    display: inline;
  }

   @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    height: 75px;

    ul {
      list-style:none;
      margin-left: 45px;
    }
   }
`

export const Item = styled.li`
    cursor: pointer;
    display: none;
    color: #fff;

    background: ${({ theme, selected }) => selected ? theme.blueSecundary : theme.bluePrimary};

    @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
      padding: 20px 50px;

      font-size: 28px;
      display: inline;
    }
`
