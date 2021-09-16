import styled from 'styled-components';

export const ContainerSmall = styled.div`
  position: ${(props) => props.position || 'relative'};
  display: block;
  margin: ${(props) => props.margin || 'auto'};
  padding: 0 1rem;
  max-width: 48rem;
`;
