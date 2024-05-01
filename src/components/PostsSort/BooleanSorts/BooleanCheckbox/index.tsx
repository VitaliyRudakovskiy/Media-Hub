'use client'

import { useEffect, useState } from 'react'

import { useAppDispatch } from '@/store/hooks'
import { setIsLikedByMe, setIsWithComments, setIsWithPictures } from '@/store/slices/sortPostsSlice'
import Checkbox from '@/UI/Checkbox'

import { BooleanCheckboxProps } from './types'

const BooleanCheckbox = ({ id, name }: BooleanCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (name === 'withPictures') dispatch(setIsWithPictures(isChecked))
    if (name === 'byComments') dispatch(setIsWithComments(isChecked))
    if (name === 'likedByMe') dispatch(setIsLikedByMe(isChecked))
  }, [isChecked, name, dispatch])

  const handleCheck = () => setIsChecked(!isChecked)

  return <Checkbox id={id} name={name} isChecked={isChecked} onChange={handleCheck} />
}

export default BooleanCheckbox
