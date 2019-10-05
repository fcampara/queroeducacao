import styled from 'styled-components'

export const Dropdown = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  color: #FFF;
  margin-right: 8px;

  .dropdown-content {
    margin-top: 20px;
    display: none;
    width: auto;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown-content p {
    color: #000;
  }

  svg {
    margin-left: 8px;
  }

  &:hover .dropdown-content {
    display: block;
  }
`
