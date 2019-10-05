import styled from 'styled-components'

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1px 3fr 1px 1fr;
  color: ${props => props.theme.blueSecundary};

  .text {
    display: none;
  }
  .title {
    display: block;
  }

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
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    margin: 0 80px;
    grid-template-columns: 15% 1px 35% 140px 40%;

    .title {
      display: none;
    }
    .text {
      display: block;
    }
    
    .help {
      svg {
        margin-right: 10px;
      }

      margin-right: 30px;

      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        width: 130px;
      }
    }

    .whatsapp {
      display: flex;
      align-items: center;
      margin-left: 40px;

      svg {
        color: #25d366;
      }
    }

    .account {
      flex-direction: row;
      justify-content: flex-end;

      svg {
        margin-left: 10px;
      }
    }
  }
`
