'use client'

import Image from 'next/image'

import StyledButton from './styled'
import { ButtonProps } from './types'

const Button = ({
  variant,
  children,
  disabled = false,
  type = 'button',
  width = 'fit-content',
  icon,
  onClick,
  isSmall = false,
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $width={width}
      $isSmall={isSmall}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
      {icon && <Image src={icon} alt={`button picture ${icon}`} width={20} height={20} />}
    </StyledButton>
  )
}

export default Button
