'use client'

import { forwardRef } from 'react'

import StyledInput from './styled'
import { IInputProps } from './types'

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder, type = 'text', ...props }, ref) => (
    <StyledInput placeholder={placeholder} ref={ref} type={type} {...props} />
  )
)
Input.displayName = 'Input'

export default Input
