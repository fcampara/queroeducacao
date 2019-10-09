import React, { useEffect, useState, useCallback, Fragment } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Checkbox from '../../../components/Checkbox'

import { Container, Header, List, Card } from './styles'

import api from '../../../services/api'
import { onlyDecimal } from '../../../utils/format'

export default function Universities ({ filter, onChange }) {
  const [list, setList] = useState([])
  const [filtered, setFiltered] = useState([])
  const [selected, setSelectd] = useState([])
  const [, updateState] = React.useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  useEffect(() => {
    async function loadUniversities () {
      api('/scholarships').then(({ data }) => {
        setList(data)
      })
    }
    loadUniversities()
  }, [filter])

  useEffect(() => {
    function fillMyList (data) {
      const filtered = data.filter((university) => {
        let isValid = true
        const { city, distance, presential, course, rangePrice } = filter
        if (city && university.city !== city) isValid = false
        if (distance && university.course.kind !== 'EaD') isValid = false
        if (presential && university.course.kind !== 'Presencial') isValid = false
        if (course && university.course.name !== course) isValid = false
        if (rangePrice && university.price_with_discount >= Number(rangePrice)) isValid = false
        return isValid
      })

      const orderList = (filtered && filtered.sort((a, b) => {
        const first = a.university.name
        const second = b.university.name
        if (first > second) return 1
        if (first < second) return -1
        return 0
      })) || []

      return orderList
    }

    const listFiltered = fillMyList(list)
    setFiltered(listFiltered)
  }, [filter, list])

  const handleSelect = (index) => {
    selected[index] = !selected[index]
    setSelectd(selected)
    forceUpdate()

    const favorites = list
      .filter((_, index) => selected
        .some((isSelected, indexSelected) => index === indexSelected && isSelected))

    onChange(favorites)
  }

  const renderCard = () => {
    if (!filtered) return null

    return (
      filtered.map((element, index) => {
        const { university, course, ...rest } = element
        return (
          <Fragment key={index}>
            <Card>
              <div>
                <Checkbox checked={!!selected[index]} onChange={() => handleSelect(index)} />
              </div>
              <div>
                <img alt='Logo universidade' src={university.logo_url} />
              </div>
              <div className='university'>
                <div className='name'>
                  <h3>{course.name}</h3>
                  <div>{course.level}</div>
                </div>
                <div className='price'>
                  <div>
                    Bolsa de <span className='bold text-green'>{onlyDecimal(rest.discount_percentage)}%</span>
                  </div>
                  <div className='bold text-green'>R$ {onlyDecimal(rest.price_with_discount)}/mês</div>
                </div>
              </div>
            </Card>
            <hr />
          </Fragment>
        )
      })
    )
  }

  return (
    <Container>
      <Header>
        <div>Resultado:</div>
        <div className='order'>
          Ordernar por <span> Nome da faculdade <FaAngleDown /></span>
        </div>
      </Header>
      <List>
        <hr />
        {
          renderCard()
        }
      </List>
    </Container>
  )
}

Universities.propType = {
  filter: PropTypes.objectOf({
    city: PropTypes.string,
    distance: PropTypes.bool,
    presential: PropTypes.bool,
    course: PropTypes.string,
    rangePrice: PropTypes.string
  }).isRequired,
  onChange: PropTypes.func.isRequired
}
