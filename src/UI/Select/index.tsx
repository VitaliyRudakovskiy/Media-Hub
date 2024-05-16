import { forwardRef, MouseEventHandler, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import defineArrowIcon from '@/helpers/defineArrowIcon'
import useOnClickOutside from '@/hooks/useClickOutside'
import { selectTheme } from '@/store/slices/themeSlice'

import { ArrowImage, SelectLabel, StyledSelect, StyledSelectContainer } from './styled'
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
      <>
        <SelectLabel>{placeholder}</SelectLabel>
        <StyledSelectContainer $width={width} ref={selectRef}>
          <StyledSelect onClick={handleToggle} defaultValue={options[0]} {...props} ref={ref}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
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
      </>
    )
  }
)
Select.displayName = 'Select'

export default Select
