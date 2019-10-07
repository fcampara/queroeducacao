import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 370px;
  grid-template-columns: repeat(auto-fit, 1fr);

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    grid-template-rows: 670px;
    grid-template-columns: repeat(auto-fit, 370px);
  }
`

export const Favorite = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 35px;

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
  height: 530px;
  min-height: 530px;
  }

  transition: background 0.2s;

  &.new:hover {
    background: #f4fafbf2;
  }

  &.new {
    cursor: pointer;
    line-height: 2rem;
    justify-content: center;
    svg {
      font-size: 140px;
      color: ${({ theme }) => theme.bluePrimary};
      margin: 0 auto;
    }

    align-items: center;
  }

  .university {
    height: 100%;

    hr {
      margin: 25px auto;
      border-top: 3px solid ${({ theme }) => theme.grayLine};
      border-left: 0px
    }
  }

  .university .university-info {
    justify-content: center;
    font-weight: 900;
    font-size: 20px;

    img {
      width: 200px;
      margin-bottom: 30px;
    }

    .course {
      color: ${({ theme }) => theme.blueSecundary};
      margin: 10px auto;
    }

    .score {
      margin-top: 8px;
    }
  }

  .university .university-period {
    font-size: 19px;
    .shift {
      margin-bottom: 15px;
    }
  }

  .university .university-price {
    margin: 25px auto;

    .title {
      font-size: 19px;
      margin-bottom: 15px;
    }

    .old-value {
      font-size: 19px;
      margin-bottom: 5px;
    }

    .new-value {
      font-weight: 900;
      font-size: 27px;
      color: ${({ theme }) => theme.green}
    }
  }
`
