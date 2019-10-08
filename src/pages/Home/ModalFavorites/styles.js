import styled from 'styled-components'

export const Header = styled.div`
  h1 {
    margin-bottom: 0px!important;
  }

  margin-bottom: 2.5rem;
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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
