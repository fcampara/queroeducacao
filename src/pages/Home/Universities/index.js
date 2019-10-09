import React, { useEffect, useState, useCallback, Fragment } from 'react'
import { FaAngleDown } from 'react-icons/fa'

import Checkbox from '../../../components/Checkbox'

import { Container, Header, List, Card } from './styles'

import api from '../../../services/api'
import { onlyDecimal } from '../../../utils/format'

export default function Universities () {
  const [list, setList] = useState([])
  const [selected, setSelectd] = useState([])
  const [, updateState] = React.useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  useEffect(() => {
    async function loadUniversities () {
      api('/scholarships').then(({ data }) => {
        const orderList = data.sort((a, b) => {
          const first = a.university.name
          const second = b.university.name
          if (first > second) return 1
          if (first < second) return -1
          return 0
        })

        const falseSelecteds = new Array(orderList.length).fill(false)
        setList(orderList)
        setSelectd(falseSelecteds)
      })
    }

    loadUniversities()
  }, [])

  const handleSelect = (index) => {
    selected[index] = !selected[index]
    setSelectd(selected)
    forceUpdate()

    const favorites = list
      .filter((_, index) => selected
        .some((isSelected, indexSelected) => index === indexSelected && isSelected))
    console.log(favorites)
  }

  const renderCard = () => {
    if (!list) return null

    return (
      list.map((element, index) => {
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
                  <div className='bold text-green'>R$ {onlyDecimal(rest.full_price)}/mês</div>
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
