import React from 'react'

import Logo from '../../assets/logo.jpg'
import { FaInfoCircle, FaRegUserCircle, FaWhatsapp } from 'react-icons/fa'

import { Container } from './styles'

export default function header () {
  return (
    <Container>
      <div className='help bold'>
        <FaInfoCircle className='medium' />
        <span className='title'>Ajuda</span>
        <div className='text'>
          <p>Como funciona</p>
        </div>
      </div>
      <span className='separator' />
      <div className='whatsapp'>
        <FaWhatsapp className='medium' />
        <div className='text'>
          <p className='bold'>0800 123 2222</p>
          <p>Envie mensagem ou ligue</p>
        </div>
      </div>
      <div className='logo'>
        <img src={Logo} />
      </div>
      <span className='separator hide-responsive' />
      <div className='account bold'>
        <span className='title'>Conta</span>
        <div className='text'>
          <p>Nome Sobrenome</p>
        </div>
        <FaRegUserCircle className='medium' />
      </div>
    </Container>
  )
}
