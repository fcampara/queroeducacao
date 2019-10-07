import React from 'react'

import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa'
import { Container } from './styles'

import PropTypes from 'prop-types'

export default function rating ({ max = 5, score }) {
  const renderStar = () => {
    let initialScore = score
    const array = [...new Array(max)].map((_, key) => {
      if (initialScore >= 1) {
        initialScore -= 1
        return <FaStar key={key} />
      }

      if (initialScore >= 0.5) {
        initialScore -= 0.5
        return <FaStarHalfAlt key={key} />
      }

      return <FaRegStar key={key} />
    })
    return array
  }

  return (
    <Container>
      <span>{score}</span>
      {renderStar()}
    </Container>
  )
}

rating.propTypes = {
  max: PropTypes.number,
  score: PropTypes.number.isRequired
}
