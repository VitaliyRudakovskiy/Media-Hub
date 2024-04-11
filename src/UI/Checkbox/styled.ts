import styled from 'styled-components';

export const CheckboxWrapper = styled.div``;

export const Label = styled.label`
  cursor: pointer;
`;

export const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + ${Label} {
    display: flex;
    align-items: center;
    gap: 5px;
    user-select: none;
  }

  & + ${Label}::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &:checked + ${Label}::before {
    border-color: ${({ theme }) => theme.activeButtonColor};
    background-color: ${({ theme }) => theme.activeButtonColor};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }

  &:focus + ${Label}::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 255, 0.125);
  }

  &:focus:not(:checked) + ${Label}::before {
    border-color: #c3c3c3;
  }
`;
