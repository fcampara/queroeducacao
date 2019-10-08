import React from 'react'
import propTypes from 'prop-types'

import Modal from '../../../components/Modal'
import Select from '../../../components/Select'

import { Header, Filters } from './styles'

export default function modalFavorites ({ show, onClose }) {
  return (
    <Modal visible={show} onClose={() => onClose()}>
      <Header>
        <h1>Adicionar bolsa</h1>
        <span>Filtre e adicione as bolsas de seu interesse.</span>
      </Header>
      <Filters>
        <div className='flex'>
          <Select label='Selecione sua cidade'/>
          <Select label='Selecione o curso de sua preferência' />
        </div>
        <div className='flex'>
          <span>Como você quer estudar?</span>
          <input type='checkbox' /> Presencial
          <input type='checkbox' /> A distância
          <span>Até quanto pode pagar?</span>
        </div>
      </Filters>
      <div className='list'>
        <div className='list-header' />
      </div>
    </Modal>
  )
}

modalFavorites.propTypes = {
  show: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired
}
