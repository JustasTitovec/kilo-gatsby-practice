import styled from 'styled-components';
import { TextBase } from './TextBase';
import { text } from '../../styles/colors';

interface Styles {
  opacity?: number;
}

export const Caption = styled(TextBase)<Styles>`
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 400;
  color: ${({ color }) => color || text};
  opacity: ${({ opacity }) => opacity || 0.64};
`;
