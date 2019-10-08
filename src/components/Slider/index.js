import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export default function Slider (props) {
  const { min = 1, max = 100, value = 1, onChange } = props
  return (
    <Container>
      <input
        className='slider'
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={(element) => onChange(element)}
      />
    </Container>
  )
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}
