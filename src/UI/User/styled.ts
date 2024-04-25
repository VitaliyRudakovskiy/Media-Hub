import Link from 'next/link';
import styled from 'styled-components';

import { flexColumn } from '@/theme/styles/mixins';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.sectionBorderColor};

  &:last-child {
    border-bottom: none;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 75%;
`;

export const TextContainer = styled.div`
  ${flexColumn};
  gap: 5px;
  text-align: justify;
`;

export const UserNameLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
  font-size: 20px;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.secondaryTextColor};
  }
`;

export const UserDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
