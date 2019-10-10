import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Favorite } from './styles'
import { IoIosAddCircleOutline } from 'react-icons/io'
import Rating from '../../../components/Rating'

import * as favoriteActions from '../../../store/modules/favorite/actions'
import ModalFavorites from '../ModalFavorites'

export default function Favorites () {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const listFavorites = useSelector(state => state.favorite.list)

  function deleteFavorite (index) {
    dispatch(favoriteActions.deleteFavorite(index))
  }

  const createUniversertyCard = (favorite, index) => {
    const { course, university, campus, ...infos } = favorite

    return (
      <Favorite key={index} className='my-favorite'>
        <div className='university'>
          <div className='university-info flex column align-center'>
            <img alt='Logo universidade' src={university.logo_url} />
            <span className='name capitalize'>{university.name}</span>
            <span className='course'>{course.name}</span>
            <Rating className='rating' score={university.score} />
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
            <button
              className='primary'
              onClick={() => deleteFavorite(index)}
            >
              Excluir
            </button>
            <button
              className='yellow'
              disabled={!infos.enabled}
            >
              {!infos.enabled ? 'Indisponível' : 'Ver oferta'}
            </button>
          </div>
        </div>
      </Favorite>
    )
  }

  return (
    <Container>
      <Favorite className='new' onClick={() => setShow(true)}>
        <IoIosAddCircleOutline />
        <h2>Adicionar bolsa</h2>
        <p>Clique para adicionar bolsas de cursos do seu interesse</p>
      </Favorite>
      {
        listFavorites && listFavorites.map((favorite, index) => (
          createUniversertyCard(favorite, index)
        ))
      }
      <ModalFavorites show={show} onClose={() => setShow(false)} />
    </Container>
  )
}
