import styled from 'styled-components'

export const Modal = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: ${({ theme }) => theme.overlay}; /* Black w/ opacity */
`

export const Content = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 65vw;
`

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 67vw;
  padding: 20px;
  margin: auto;
  cursor: pointer;
  z-index: 2;
  font-size: 100px;
  color: white;
  font-size: 35px;
`
