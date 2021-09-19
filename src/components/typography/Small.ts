import styled from 'styled-components';
import { TextBase } from './TextBase';

interface Styles {
  marginTop: string;
}

export const Small = styled(TextBase).attrs({ as: 'p' })<Styles>`
  font-size: 0.875rem;
  font-weight: 200;
  line-height: 1.25rem;
  margin-top: ${(props) => props.marginTop || ''};
`;
