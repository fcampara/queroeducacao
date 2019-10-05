import React from 'react'

import Dropdown from '../Dropdown'

import { Container } from './styles'

export default function menu () {
  const menus = ['Minha Conta', 'Pré-matriculas', 'Bolsas Favoritas']
  const options = menus.slice(1, Infinity).map((menu, index) => ({
    label: menu,
    value: index
  }))

  return (
    <Container>
      <ul>
        {
          menus && menus.map(menu => (
            <li selected={false} key={menu}>{menu}</li>
          ))
        }
      </ul>
      <Dropdown className='hide-responsive' label='Menu' options={options} />
    </Container>
  )
}
