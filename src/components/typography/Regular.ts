import styled from 'styled-components';
import { TextBase } from './TextBase';

export const Regular = styled(TextBase).attrs({ as: 'p' })`
  font-size: 1rem;
  line-height: 1.5rem;
`;
