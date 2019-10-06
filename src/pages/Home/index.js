import React, { Component } from 'react'

import Options from './Options'
import { Container } from './styles'
export default class Home extends Component {
  state = {
    menus: ['Todos os semestres', '2º semestre de 2019', '1º semestre de 2019'],
    selected: 0
  }

  render () {
    const { menus, selected } = this.state
    return (
      <Container>
        <h1>Bolsas favoritas</h1>
        <p>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</p>
        <div className='options'>
          <Options options={menus} selected={selected} />
        </div>
      </Container>
    )
  }
}
