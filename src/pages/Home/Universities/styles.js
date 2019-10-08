import styled from 'styled-components'

export const Container = styled.div`
  margin: 30px auto;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 900;

  div {
  margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  span {
    margin-left: 8px;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.bluePrimary}
  }

  svg {
    margin-left: 8px;
    font-size: 25px;
  }

  .order {
    align-items: flex-end;
    flex-direction: column;
  }

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    .order {
      flex-direction: row;
    }
  }
`

export const List = styled.div`
  hr {
    margin: 25px auto;
    border-top: 3px solid ${({ theme }) => theme.grayLine};
    border-left: 0px
  }
`
