import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

  .label {
    display: flex;
    align-items: center;
  }

  margin: .5rem .5rem .5rem 0;
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${({ theme, checked }) => (checked ? theme.bluePrimary : 'white')};
  border-radius: 3px;
  transition: all 150ms;

  box-shadow: 0 0 0 ${({ checked }) => checked ? '0px' : '2px'};
  margin-right: .5rem;
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`
