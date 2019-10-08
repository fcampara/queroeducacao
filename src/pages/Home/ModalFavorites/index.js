import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

import Modal from '../../../components/Modal'
import Select from '../../../components/Select'

import api from '../../../services/api'

import { Header, Filters } from './styles'

export default function ModalFavorites ({ show, onClose }) {
  const [ city, setCity] = useState('')
  const [ course, setCourse] = useState('')
  const [ cities, setCities] = useState([])
  const [ courses, setCourses] = useState([])

  useEffect(() => {
    function loadFilters() {
      api('/scholarships').then(({ data }) => {
        const formatted = data.length && data.reduce((acc, current) => {
          const { campus, course } = current
          acc.city.push(campus.city)
          acc.course.push(course.name)
          return acc
        }, { city: [], course: [] }) || {}
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
        <div className='flex'>
          <Select
            label='Selecione sua cidade'
            options={cities}
            onChange={({ target }) => setCity(target.value)}
          />
          <Select
            label='Selecione o curso de sua preferência'
            options={courses}
            onChange={({ target }) => setCourse(target.value)}
          />
        </div>
        <div className='flex'>
          <span>Como você quer estudar?</span>
          <input type='checkbox' /> Presencial
          <input type='checkbox' /> A distância
          <span>Até quanto pode pagar?</span>
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
