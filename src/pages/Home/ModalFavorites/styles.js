import styled from 'styled-components'

export const Header = styled.div`
  h1 {
    margin-bottom: 0px!important;
  }

  margin-bottom: 2.5rem;
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-gap: 25px;

  .who-study span {
    margin-bottom: 1.4rem;
  }

  .select-presencial {
    margin-right: 3rem;
  }

  .range-price {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: .8rem;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  
  .yellow {
    margin-left: 8px;
  }
`
