import styled from 'styled-components';

import { text } from '../../styles/colors';

export const TextBase = styled.p`
  margin: ${(props) => props.margin || ''};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || text};
  text-align: ${(props) => props.textAlign || ''};
  text-decoration: ${(props) => props.textDecoration || ''};
  text-transform: ${(props) => props.textTransform || ''};
`;
export const TextBaseBold = styled(TextBase).attrs(
  (props) => props.fontWeight || 700
)``;
