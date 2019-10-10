import React from 'react'
import PropTypes from 'prop-types'
import { Container, Item } from './styles'

export default function Options ({ options, selected, onClick }) {
  return (
    <Container>
      {
        options && options.map((option, index) => (
          <Item
            key={option}
            onClick={() => onClick(index)}
            selected={index === selected}
          >
            {option}
          </Item>
        ))
      }
    </Container>
  )
}

Options.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.number,
  onClick: PropTypes.func
}
