import React, { Component } from 'react'
import { FaRegHeart, FaWhatsapp, FaRegComments, FaRegEnvelope, FaInfoCircle } from 'react-icons/fa'

import { Container, Card } from './style'
export default class index extends Component {
  render () {
    return (
      <Container>
        <Card className='col bg-secundary'>
          <FaWhatsapp className='large' />
          <div className='row'>
            <p className='bold'>0800 123 2222</p>
            <p>Segunda a sexta de 8h às 22h</p>
          </div>
        </Card>
        <Card className='col bg-secundary'>
          <FaRegComments className='large' />
          <p className='title'>Chat</p>
          <div className='text'>
            <p className='bold'>Chat ao vivo</p>
            <p>Segunda a sexta de 8h às 22h</p>
          </div>
        </Card>
        <Card className='col bg-secundary'>
          <FaRegEnvelope className='large' />
          <p className='title'>E-mail</p>
          <div className='text'>
            <p className='bold'>Mande um e-mail</p>
            <p>Respondemos rapidinho</p>
          </div>
        </Card>
        <Card className='col bg-secundary'>
          <FaInfoCircle className='large' />
          <p className='title'>Ajuda</p>
          <div className='text'>
            <p className='bold'>Central de ajuda</p>
            <p>Ecnontre todas as respostas</p>
          </div>
        </Card>
        <Card className='col bold'>
          Feito com <FaRegHeart className='hearth' /> pela Quero Educação
        </Card>
      </Container>
      // <Section className=''>
      //   <div className=''>4</div>
      //   <div className='subgrid'>
      //     <div>5.1</div>
      //     <div>5.2</div>
      //     <div>5.3</div>
      //   </div>
      //   <div className=''>6</div>
      // </Section>
    )
  }
}
