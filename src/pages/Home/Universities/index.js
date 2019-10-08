import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { Container, Header, List } from './styles'

export default function Universities () {
  return (
    <Container>
      <Header>
        <div>Resultado:</div>
        <div className='order'>Ordernar por <span> Nome da faculdade <FaAngleDown /></span></div>
      </Header>
      <List>
        <hr />
        teste
        <hr />
      </List>
    </Container>
  )
}
