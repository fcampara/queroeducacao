import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 370px;
  grid-template-columns: repeat(auto-fit, 1fr);

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    grid-template-rows: 670px;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
`

export const Favorite = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background: white;
  height: 300px;
  max-height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 35px;

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
  height: 600px;
  max-height: 600px;
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
`
