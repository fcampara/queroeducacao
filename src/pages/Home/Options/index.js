import React from 'react'
import propTypes from 'prop-types'
import { Container, Item } from './styles'

export default function options ({ options, selected }) {
  return (
    <Container>
      {
        options && options.map((option, index) => (
          <Item key={option} selected={index === selected}>{option}</Item>
        ))
      }
    </Container>
  )
}

options.propTypes = {
  options: propTypes.array.isRequired,
  selected: propTypes.number
}
