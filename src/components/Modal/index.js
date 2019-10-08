import React from 'react'
import propTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import { Modal, Content, Close } from './styles'

export default function modal (props) {
  const { onClose, visible, children } = props
  return (
    <Modal visible={visible}>
      <Close>
        <FaTimes onClick={() => onClose()} />
      </Close>
      <Content>
        {children}
      </Content>
    </Modal>
  )
}

modal.propTypes = {
  onClose: propTypes.func.isRequired,
  visible: propTypes.bool.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired
}
