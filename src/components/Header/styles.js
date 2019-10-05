import styled from 'styled-components'

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1px 3fr 1px 1fr;
  color: ${props => props.theme.blueSecundary};

  span.separator {
    margin: auto;
    border-left: 3px solid #f3f3f3;
    height: 70%;
  }

  .help {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .whatsapp {
    display: none;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 130px;
    }
  }

  .account {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
