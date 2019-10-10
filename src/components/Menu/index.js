import React from 'react'

import Dropdown from '../Dropdown'

import { Container, Item } from './styles'

export default function menu () {
  const menus = ['Minha Conta', 'Pré-matriculas', 'Bolsas Favoritas']
  const options = menus.slice(1, Infinity).map((menu, index) => ({
    label: menu,
    value: index
  }))

  const lastIndex = menus.length - 1

  return (
    <Container data-cy='menu'>
      <ul>
        {
          menus && menus.map((menu, index) => (
            <Item selected={lastIndex === index} key={menu}>{menu}</Item>
          ))
        }
      </ul>
      <Dropdown className='hide-responsive' label='Menu' options={options} />
    </Container>
  )
}
