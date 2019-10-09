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

export const Card = styled.div`
  display: flex;
  flex: 0 1 auto;
  align-items: center;

  img {
    width: 125px;
    height: auto;
    margin: 0px 30px 0px 15px;
  }

  h3 {
    color: ${({ theme }) => theme.blueSecundary};
    margin-bottom: 5px;
  }

  .university .name div {
    font-size: 17px;
  }

  .university {
    height: 150px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;


  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    height: 100px;
    align-items: center;
    flex-direction: row;
  }

  .price {
    font-size: 20px;
  }
`
