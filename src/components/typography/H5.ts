import styled from 'styled-components';
import { TextBase } from './TextBase';

export const H5 = styled(TextBase).attrs({ as: 'h5' })`
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 48rem) {
    font-size: 0.938rem;
  }
`;
