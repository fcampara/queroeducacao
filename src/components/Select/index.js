import React from 'react'
import proptypes from 'prop-types'
import { Container, CustomSelect } from './styles'

export default function Select ({ label, options, onChange }) {
  return (
    <Container>
      <label className='capitalize'>{label}</label>
      <CustomSelect onChange={element => onChange(element)}>
        <option value='' />
        {options && options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </CustomSelect>
    </Container>
  )
}

Select.propTypes = {
  label: proptypes.string.isRequired,
  options: proptypes.array.isRequired,
  onChange: proptypes.func.isRequired
}
