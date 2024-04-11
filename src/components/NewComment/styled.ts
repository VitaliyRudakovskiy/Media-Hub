import Image from 'next/image';
import styled from 'styled-components';

export const CommentSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.sectionColor};
  border: 1px solid ${({ theme }) => theme.sectionBorderColor};
  border-radius: 8px;
  padding: 5px;
  width: 100%;
`;

export const CommentInput = styled.input`
  width: 100%;
  font-family: inherit;
  border: none;
  padding: 0 15px 0 8px;
  background-color: inherit;
  color: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
`;

export const SubmitIcon = styled(Image)`
  cursor: pointer;
`;
