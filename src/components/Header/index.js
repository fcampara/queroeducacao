import React from 'react'

import Logo from '../../assets/logo.jpg'
import { FaInfoCircle, FaRegUserCircle } from 'react-icons/fa'

import { Container } from './styles'

export default function header () {
  return (
    <Container>
      <div className='help bold'>
        <FaInfoCircle className='medium' />
        <p>Ajuda</p>
      </div>
      <span className='separator' />
      <div className='whatsapp'>
        Whatsapp
      </div>
      <div className='logo'>
        <img src={Logo} />
      </div>
      <span className='separator' />
      <div className='account bold'>
        <FaRegUserCircle className='medium' />
        Conta
      </div>
    </Container>
  )
}
