import React from 'react'

import { FaChevronLeft } from 'react-icons/fa'
import { Container, List } from './styles'

export default function breadcrumbs () {
  const pages = ['Home', 'Minha conta', 'Bolsas favoritas']
  return (
    <Container data-cy='breadcrumbs'>
      <List>
        {
          pages && pages.map(page => (
            <li key={page}><FaChevronLeft />{page}</li>
          ))
        }
      </List>
    </Container>
  )
}
