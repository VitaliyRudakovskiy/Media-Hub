'use client'

import booleanSorts from '@/constants/booleanSorts'

import BooleanCheckbox from './BooleanCheckbox'
import { BooleanSortsContainer } from './styled'

const BooleanSorts = () => {
  return (
    <BooleanSortsContainer>
      {booleanSorts.map(({ id, name }) => (
        <BooleanCheckbox key={id} id={id} name={name} />
      ))}
    </BooleanSortsContainer>
  )
}

export default BooleanSorts
