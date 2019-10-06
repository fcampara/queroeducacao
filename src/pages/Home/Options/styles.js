import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.blueSecundary};
  margin: 2rem auto;
  display: grid;

  font-size: 17px;
  font-weight: 900;

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    font-size: 20px;
    grid-template-columns: repeat(auto-fit, 250px);
    justify-content: end;
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  background: ${({ theme, selected }) => selected ? theme.blueSecundary : 'white'};
  color: ${({ theme, selected }) => !selected ? theme.blueSecundary : 'white'};

  border: 1px solid ${({ theme }) => theme.blueSecundary};

  @media (max-width: ${props => props.theme.mediaQueryMinWidth}) {
    &:nth-child(2n+2) {
      border-top: 0px;
      border-bottom: 0px;
    }

    &:first-child {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }

    &:last-child {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    grid-template-columns: repeat(auto-fill, 300px);

    border: 1px solid ${({ theme }) => theme.blueSecundary};
  }
`
