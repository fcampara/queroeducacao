import React from 'react'
import Modal from '../../../components/Modal'

import propTypes from 'prop-types'

export default function modalFavorites ({ show, onClose }) {
  return (
    <Modal visible={show} onClose={() => onClose()}>
      Teeste
    </Modal>
  )
}

modalFavorites.propTypes = {
  show: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired
}
