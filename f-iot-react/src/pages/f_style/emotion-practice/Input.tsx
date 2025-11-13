import styled from '@emotion/styled'
import React from 'react'
import { theme } from './theme';
// Input.tsx(src/components/common/Input.tsx)
// : 공통 컴포넌트


export const Input = styled.input `
  padding:0.9rem;
  border: 1px solid #ddd;
  border-radius: ${theme.radius.base};
  font-size: 1rem;
  width: 100%;
  transition: border 0.2s;

  &:focus {
    border: ${theme.colors.primary};
    outline: none;
  }
`;