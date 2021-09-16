import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems || ''};
  justify-content: ${(props) => props.justifyContent || ''};
  flex-direction: ${(props) => props.flexDirection || ''};
  flex-wrap: ${(props) => props.flexWrap || ''};
  margin: ${(props) => props.margin || ''};
  padding: ${(props) => props.padding || ''};
`;
