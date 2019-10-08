import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .slider {
  -webkit-appearance: none;
  width: 95%;
  height: 2.5px;
  background: ${({ theme }) => theme.blueSecundary};
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2.5px solid ${({ theme }) => theme.blueSecundary};
  border-radius: 50%;
  background: white;
  cursor: pointer;
}
`
