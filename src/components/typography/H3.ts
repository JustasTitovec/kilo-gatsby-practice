import styled from 'styled-components';
import { TextBase } from './TextBase';

export const H3 = styled(TextBase)`
  font-size: 24px;
  margin: 24px 0px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0px 16px;
  }
`;
