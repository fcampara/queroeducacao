import styled from 'styled-components'

export const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 0.2rem;

  .full {
    grid-column: span 3;
  }
`
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100px;
  color: #fff;

  svg.full {
    width: 100%;
    font-size: 2.4rem;
    font-weight: 900;
  }

  span {
    font-size: 1.2rem;
    font-weight: 900;
  }
`
