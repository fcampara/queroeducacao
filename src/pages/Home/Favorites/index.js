import React from 'react'

import { Container, Favorite } from './styles'
import { IoIosAddCircleOutline } from 'react-icons/io'

export default function favorites () {
  return (
    <Container>
      <Favorite className='new'>
        <IoIosAddCircleOutline />
        <h2>Adicionar curso</h2>
        <p>Clique para adicionar bolsas de cursos do seu interesse</p>
      </Favorite>
      <Favorite>
        Teste
      </Favorite>
      <Favorite>
        Teste
      </Favorite>
      <Favorite>
        Teste
      </Favorite>
    </Container>
  )
}
