import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Modal, Content, Close } from './styles'
export default function index () {
  return (
    <>
      <Modal>
        <Close>
          <FaTimes />
        </Close>
        <Content>
          Teste
        </Content>
      </Modal>
    </>
  )
}
