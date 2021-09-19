import React from 'react';
import styled from 'styled-components';
import { primaryColor } from '../../styles/colors';

interface Props {
  children: any;
  className?: string;
}
interface Styles {
  backgroundColor?: string;
}

export const Button: React.FC<Props> = ({ children, className }) => {
  return <PrimaryButton className={className}>{children}</PrimaryButton>;
};

const PrimaryButton = styled.button<Styles>`
  padding: 0.5rem, 2.5rem, 0.5rem, 2.5rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: ${({ backgroundColor }) => backgroundColor || primaryColor};
  box-shadow: 0rem 1rem 2rem rgba(255, 155, 78, 0.24);
  border-radius: 0.5rem;
  width: 21.875rem;
  height: 3.5rem;
  border: none;
  margin: 1rem 0rem;
  cursor: pointer;

  @media (max-width: 30rem) {
    width: 100%;
  }

  &:active {
    box-shadow: 0rem 0.5rem 1rem rgba(255, 155, 78, 0.24);
    transform: translateY(0.125rem);
  }
`;
