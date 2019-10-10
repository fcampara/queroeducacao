import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { Container, Favorite } from './styles'
import { IoIosAddCircleOutline } from 'react-icons/io'
import Rating from '../../../components/Rating'

import * as favoriteActions from '../../../store/modules/favorite/actions'
import ModalFavorites from '../ModalFavorites'

export default function Favorites ({ semester }) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const listFavorites = useSelector(state => state.favorite.list)
  const [filteredListFavorites, setFilteredListFavorites] = useState([])

  useEffect(() => {
    const filteredList = listFavorites.filter(({ enrollment_semester }) => {
      if (!semester) return true
      if (semester === 1 && enrollment_semester === '2019.2') return true
      if (semester === 2 && enrollment_semester === '2020.1') return true
      return false
    })

    setFilteredListFavorites(filteredList)
  }, [listFavorites, semester])

  function deleteFavorite (index) {
    dispatch(favoriteActions.deleteFavorite(index))
  }

  const createUniversertyCard = (favorite, index) => {
    const { course, university, ...infos } = favorite

    return (
      <Favorite data-cy={`favorite-${index}`} key={index} className='my-favorite'>
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
              data-cy='btn-remove'
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
      <Favorite data-cy='new-favorite' className='new' onClick={() => setShow(true)}>
        <IoIosAddCircleOutline />
        <h2>Adicionar bolsa</h2>
        <p>Clique para adicionar bolsas de cursos do seu interesse</p>
      </Favorite>
      {
        filteredListFavorites && filteredListFavorites.map((favorite, index) => (
          createUniversertyCard(favorite, index)
        ))
      }
      <ModalFavorites show={show} onClose={() => setShow(false)} />
    </Container>
  )
}

Favorites.propTypes = {
  semester: PropTypes.number.isRequired
}
