import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  span {
    margin-right: 0.5rem;
  }

  svg {
    padding: 3px;
    color: ${({ theme }) => theme.yellowSecundary};
  }
`
