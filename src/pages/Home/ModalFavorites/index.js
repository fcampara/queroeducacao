import React from 'react'
import Modal from '../../../components/Modal'

import propTypes from 'prop-types'

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
          <span>Selecione sua cidade</span>
          <select />
          <span>Selecione sua cidade</span>
          <select />
          <span>Como você quer estudar?</span>
        </div>
        <input type='checkbox' />
        <input type='checkbox' />
        <span>Até quanto pode pagar?</span>
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
