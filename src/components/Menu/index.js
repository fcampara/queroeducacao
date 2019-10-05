import React from 'react'

import Dropdown from '../Dropdown'

import { Container } from './styles'

export default function menu () {
  const options = [
    {
      label: 'Pré-matriculas',
      value: 0
    },
    {
      label: 'Bolsas favoritas',
      value: 1
    }
  ]
  return (
    <Container>
      <ul>
        <li>Minha Conta</li>
      </ul>
      <Dropdown label='Menu' options={options} />
    </Container>
  )
}
