'use client'

import StarsRating from 'react-star-rate'

import { StarRatingLabel } from './styled'
import { StarRatingType } from './types'

const StarRating = ({ starValue, setStarValue }: StarRatingType) => {
  return (
    <div>
      <StarRatingLabel>Rating{starValue !== 0 && <span> - {starValue}</span>}</StarRatingLabel>
      <StarsRating
        allowHalf={false}
        count={10}
        value={starValue}
        onChange={(value) => {
          setStarValue(value)
        }}
      />
    </div>
  )
}

export default StarRating
