import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 18px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.inputBackgroundColor};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0px 8px 18px -7px rgba(34, 60, 80, 0.26);
    border-color: blue;
  }
`;

export default StyledInput;
