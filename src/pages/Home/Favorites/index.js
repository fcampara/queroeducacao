import React from 'react'

import { Container, Favorite } from './styles'
import { IoIosAddCircleOutline } from 'react-icons/io'
import Rating from '../../../components/Rating'

import { formatPrice } from '../../../utils/format'
export default function favorites () {
  const favorite = {
    full_price: 2139.64,
    formatted_full_price: formatPrice(2139.64),
    price_with_discount: 706.08,
    formatted_price_with_discount: formatPrice(706.08),
    discount_percentage: 67,
    start_date: '01/08/2019',
    enrollment_semester: '2019.2',
    enabled: true,
    course: {
      name: 'Engenharia Mecânica',
      kind: 'Presencial',
      level: 'Bacharelado',
      shift: 'Noite'
    },
    university: {
      name: 'UNIP',
      score: 4.5,
      logo_url: 'https://www.tryimg.com/u/2019/04/16/unip.png'
    },
    campus: {
      name: 'Jardim das Indústrias',
      city: 'São José dos Campos'
    }
  }

  const createUniversertyCard = (favorite) => {
    const { course, university, campus, ...infos } = favorite
    return (
      <Favorite className='my-favorite'>
        <div className='university'>
          <div className='university-info flex column align-center'>
            <img alt='Logo universidade' src={university.logo_url} />
            <span className='name capitalize'>{university.name}</span>
            <span className='course'>{course.name}</span>
            <Rating score={university.score} />
          </div>
          <hr />
          <div className='university-period flex column align-center'>
            <span className='bold capitalize shift'>{course.kind} • {course.shift}</span>
            <span className='period'>Início das aulas em: {infos.start_date}</span>
          </div>
          <hr />
          <div className='university-price flex column align-center'>
            <span className='title bold'>Mensalidade com o Quero Bolsa:</span>
            <span className='line-through old-value'>
              {infos.formatted_full_price}
            </span>
            <span>
              <span className='new-value'>{infos.formatted_price_with_discount}</span> /mês
            </span>
          </div>
          <div className='actions'>
            <button className='primary'>Excluir</button>
            <button className='yellow'>Ver oferta</button>
          </div>
        </div>
      </Favorite>
    )
  }

  return (
    <Container>
      <Favorite className='new'>
        <IoIosAddCircleOutline />
        <h2>Adicionar bolsa</h2>
        <p>Clique para adicionar bolsas de cursos do seu interesse</p>
      </Favorite>
      {createUniversertyCard(favorite)}
    </Container>
  )
}
