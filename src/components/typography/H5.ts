import styled from 'styled-components';
import { TextBase } from './TextBase';
import { tablet } from 'styles/breakpoints';

export const H5 = styled(TextBase).attrs({ as: 'h5' })`
  font-size: 1rem;
  font-weight: 600;
  @media ${tablet} {
    font-size: 0.938rem;
  }
`;
