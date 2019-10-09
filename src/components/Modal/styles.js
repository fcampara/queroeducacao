import styled from 'styled-components'

export const Modal = styled.div`
  display: ${({ visible }) => visible ? 'flex' : 'none'};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.overlay};
`

export const Content = styled.div`
  background-color: #fefefe;
  padding: 35px;
  border: 1px solid #888;
  width: calc(100% - 35px);
  overflow: auto;
  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    width: 60%;
    margin-bottom: 50px;
  }
`

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 15px 15px 0px;
  z-index: 2;
  color: white;
  font-size: 35px;
  svg {
    cursor: pointer;
  }
  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    margin-top: 0px;
    width: calc(60% + 45px);
  }
`
