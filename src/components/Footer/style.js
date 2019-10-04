import styled from 'styled-components'

export const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 0.2rem;

  .icon-text {
    display: flex;
    justify-content: flex-start;

    svg {
      font-size: 2.4rem;
      margin-right: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    p {
      margin-top: 0.4rem
    }
  }

  .full {
    grid-column: span 3;
  }

  svg.full {
    width: 100%;
    font-size: 2.4rem;
    font-weight: 900;
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

  svg {
    margin: 5px;
  }

  .hearth {
    font-size: 20px;
  }

  span {
    font-size: 1.2rem;
    font-weight: 900;
  }
`
