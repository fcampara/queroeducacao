import React, { useState } from 'react'
import Options from './Options'
import Favorites from './Favorites'
import { Container } from './styles'

export default function Home () {
  const [menus] = useState([
    'Todos os semestres', '2º semestre de 2019', '1º semestre de 2019'
  ])

  // 0 - All semester
  // 1 - 2º semester
  // 2 - 1º semester
  const [selected, setSelected] = useState(0)

  return (
    <Container data-cy='home'>
      <h1>Bolsas favoritas</h1>
      <p>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</p>
      <div className='options'>
        <Options
          options={menus}
          selected={selected}
          onClick={(index) => setSelected(index)}
        />
      </div>
      <div>
        <Favorites semester={selected} />
      </div>
    </Container>
  )
}
