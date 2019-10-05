import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
  height: 45px;
  background: ${({ theme }) => theme.bluePrimary};

  ul {
    list-style:none;
  }

  ul li {
    display: inline;
    color: #fff;
    padding: 10px;
  }
`

export const Menu = styled.div`
  padding: 10px;
`
