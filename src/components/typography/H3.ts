import styled from 'styled-components';
import { TextBase } from './TextBase';

export const H3 = styled(TextBase).attrs({ as: 'h3' })`
  font-size: 1.5rem;
  margin: 1.5rem 0rem;
  font-weight: 600;
`;
