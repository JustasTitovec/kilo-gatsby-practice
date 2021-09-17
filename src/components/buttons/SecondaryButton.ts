import styled, { keyframes } from 'styled-components';
import { Button } from './Button';
import { green } from '../../styles/colors';

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${(props) => props.background || green};
  animation: 2s ${pulse} infinite alternate;
`;
