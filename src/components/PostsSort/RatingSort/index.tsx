'use client'

import { useEffect, useState } from 'react'

import ratingSorts from '@/constants/ratingSorts'
import { useAppDispatch } from '@/store/hooks'
import { setRating } from '@/store/slices/sortPostsSlice'
import Checkbox from '@/UI/Checkbox'

import { RatingSortContainer } from './styled'

const RatingSort = () => {
  const [activeRating, setActiveRating] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setRating(activeRating))
  }, [activeRating, dispatch])

  const handleChange = (id: string) => {
    setActiveRating((prevActive) => (prevActive === id ? null : id))
  }

  return (
    <RatingSortContainer>
      {ratingSorts.map(({ id, name }) => (
        <Checkbox
          key={id}
          id={id}
          name={name}
          isChecked={activeRating === id}
          onChange={() => handleChange(id)}
        />
      ))}
    </RatingSortContainer>
  )
}

export default RatingSort
