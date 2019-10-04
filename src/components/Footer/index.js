import React, { Component } from 'react'
import { FaRegHeart, FaWhatsapp, FaRegComments, FaRegEnvelope, FaInfoCircle } from 'react-icons/fa'

import { Container, Card } from './style'
export default class index extends Component {
  render () {
    return (
      <Container className='bg-primary'>
        <Card className='full bg-secundary'>
          <FaWhatsapp /> Whats App
        </Card>
        <Card className='bg-secundary'>
          <FaRegComments className='full' />
          <span>Chat</span>
        </Card>
        <Card className='bg-secundary'>
          <FaRegEnvelope className='full' />
          <span>E-mail</span>
        </Card>
        <Card className='bg-secundary'>
          <FaInfoCircle className='full' />
          <span>Ajuda</span>
        </Card>
        <Card className='full'>
          Feito com <FaRegHeart /> pela Quero Educação
        </Card>
      </Container>
    )
  }
}
