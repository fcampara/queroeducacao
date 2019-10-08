import styled from 'styled-components'

export const Modal = styled.div`
  display: ${({ visible }) => visible ? 'flex' : 'none'}; /* Hidden by default */
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: ${({ theme }) => theme.overlay}; /* Black w/ opacity */
`

export const Content = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: calc(100% - 20px);
  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    width: 80%;
  }
`

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
  z-index: 2;
  color: white;
  font-size: 35px;
  @media (min-width: ${props => props.theme.mediaQueryMinWidth}) {
    width: calc(80% + 45px);
  }
`
