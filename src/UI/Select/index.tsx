import { forwardRef, MouseEventHandler, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import defineArrowIcon from '@/helpers/defineArrowIcon'
import useOnClickOutside from '@/hooks/useClickOutside'
import { selectTheme } from '@/store/slices/themeSlice'

import { ArrowImage, StyledOption, StyledSelect, StyledSelectContainer } from './styled'
import { SelectProps } from './types'

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ placeholder, options, width = '100%', ...props }, ref) => {
    const [isOpened, setIsOpened] = useState(false)
    const theme = useSelector(selectTheme)
    const selectRef = useRef(null)

    const handleClose = () => setIsOpened(false)
    useOnClickOutside(selectRef, handleClose)

    const handleToggle: MouseEventHandler<HTMLSelectElement> = (event) => {
      event.stopPropagation()
      setIsOpened((prevOpened) => !prevOpened)
    }

    return (
      <StyledSelectContainer $width={width} ref={selectRef}>
        <StyledSelect onClick={handleToggle} defaultValue='' {...props} ref={ref}>
          <StyledOption value='' disabled>
            {placeholder}
          </StyledOption>

          {options.map((option) => (
            <StyledOption key={option} value={option}>
              {option}
            </StyledOption>
          ))}
        </StyledSelect>
        <ArrowImage
          src={defineArrowIcon(theme)}
          alt='dropdown arrow'
          $isOpened={isOpened}
          height={15}
          width={15}
        />
      </StyledSelectContainer>
    )
  }
)
Select.displayName = 'Select'

export default Select
