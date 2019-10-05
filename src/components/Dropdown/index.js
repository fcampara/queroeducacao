import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from './styles'

import { FaAngleDown } from 'react-icons/fa'

export default function dropdown (props) {
  const { label, options, ...rest } = props
  return (
    <Dropdown {...rest}>
      {label}
      <FaAngleDown />
      <div className='dropdown-content'>
        {
          options && options.map(({ label }) => (
            <p key={label}>{label}</p>
          ))
        }
      </div>
    </Dropdown>
  )
}

dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array
}
