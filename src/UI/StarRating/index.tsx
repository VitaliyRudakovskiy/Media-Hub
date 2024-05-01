'use client'

import StarsRating from 'react-star-rate'

import { StarRatingType } from './types'

const StarRating = ({ starValue, setStarValue }: StarRatingType) => {
  return (
    <div>
      <p>Specify the rating on a scale (0-10)</p>
      <StarsRating
        allowHalf={false}
        count={10}
        value={starValue}
        onChange={(value) => {
          setStarValue(value)
        }}
      />
      <span>Rating: {starValue}</span>
    </div>
  )
}

export default StarRating
