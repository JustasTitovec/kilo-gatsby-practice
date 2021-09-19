import styled from 'styled-components';
import { Button } from './Button';

interface Styles {
  margin?: string;
}

export const SecondaryButton = styled(Button)<Styles>`
  margin: ${({ margin }) => margin || '3rem 0rem'};
`;
