import React from 'react'
import PropTypes from 'prop-types'

import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon } from './styles'

export default function Checkbox ({ label, checked, ...props }) {
  return (
    <label>
      <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} />
        <div className='label'>
          <StyledCheckbox checked={checked}>
            <Icon viewBox='0 0 24 24'>
              <polyline points='20 6 9 17 4 12' />
            </Icon>
          </StyledCheckbox>
          {label}
        </div>
      </CheckboxContainer>
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}
