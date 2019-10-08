import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

import Modal from '../../../components/Modal'
import Select from '../../../components/Select'
import Slider from '../../../components/Slider'
import Checkbox from '../../../components/Checkbox'
import { formatPrice } from '../../../utils/format'

import api from '../../../services/api'

import { Header, Filters } from './styles'

export default function ModalFavorites ({ show, onClose }) {
  const [rangePrice, setRangePrice] = useState(10000)
  const [city, setCity] = useState('')
  const [distance, setDistance] = useState(false)
  const [presential, setPresential] = useState(false)
  const [course, setCourse] = useState('')
  const [cities, setCities] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    function loadFilters () {
      api('/scholarships').then(({ data }) => {
        const formatted = (data.length && data.reduce((acc, current) => {
          const { campus, course } = current
          acc.city.push(campus.city)
          acc.course.push(course.name)
          return acc
        }, { city: [], course: [] })) || {}
        const format = element => ({ label: element, value: element })

        const filteredCities = [...new Set(formatted.city)].sort().map(format)
        const filteredCourses = [...new Set(formatted.course)].sort().map(format)

        setCourses(filteredCourses)
        setCities(filteredCities)
      })
    }

    show && loadFilters()
  }, [show])

  return (
    <Modal visible={show} onClose={() => onClose()}>
      <Header>
        <h1>Adicionar bolsa</h1>
        <p>Filtre e adicione as bolsas de seu interesse.</p>
      </Header>
      <Filters>
        <div className='city'>
          <Select
            label='Selecione sua cidade'
            options={cities}
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
        </div>
        <div className='course'>
          <Select
            label='Selecione o curso de sua preferência'
            options={courses}
            value={course}
            onChange={({ target }) => setCourse(target.value)}
          />
        </div>
        <div className='who-study flex column'>
          <span className='bold capitalize'>
            Como você quer estudar?
          </span>
          <div className='flex'>
            <Checkbox
              className='select-presencial'
              label='Presencial'
              checked={presential}
              onChange={({ target }) => setPresential(target.checked)}
            />
            <Checkbox
              label='à distância'
              checked={distance}
              onChange={({ target }) => setDistance(target.checked)}
            />
          </div>
        </div>
        <div className='flex column'>
          <span className='bold capitalize'>
            Como você quer estudar?
          </span>
          <span className='range-price'>{formatPrice(rangePrice)}</span>
          <Slider
            min={100}
            max={10000}
            value={rangePrice}
            onChange={({ target }) => setRangePrice(target.value)}
          />
        </div>
      </Filters>
      <div className='list'>
        <div className='list-header' />
      </div>
    </Modal>
  )
}

ModalFavorites.propTypes = {
  show: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired
}
