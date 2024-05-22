'use client'

import { memo, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { useAppDispatch } from '@/store/hooks'
import { addOption, removeOption } from '@/store/slices/searchOptionsSlice'
import Checkbox from '@/UI/Checkbox'

import { CheckboxProps } from './types'

const SearchCheckbox = ({ id, name }: CheckboxProps) => {
  const t = useTranslations('postsSearch.options')
  const [isChecked, setIsChecked] = useState(true)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isChecked) dispatch(addOption(name))
    else dispatch(removeOption(name))
  }, [isChecked, name, dispatch])

  const handleCheck = () => setIsChecked(!isChecked)

  return <Checkbox id={id} name={t(name)} isChecked={isChecked} onChange={handleCheck} />
}

export default memo(SearchCheckbox)
