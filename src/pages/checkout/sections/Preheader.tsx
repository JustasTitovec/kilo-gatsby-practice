import React from 'react';
import styled from 'styled-components';
// Images imports
import { SideImages } from 'utils/images';

const Preheader: React.FC = () => {
  return (
    <Container>
      <img src={SideImages.discount} alt="discount" />
      <p>
        <span>50% </span>discount only valid for <span>00:15:49</span>
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  background-color: #90caf9;
  span {
    font-weight: 400;
  }
  img {
    margin-right: 1.125rem;
  }
  p {
    color: #ffffff;
    font-size: 0.938rem;
    font-weight: 200;
    letter-spacing: 0.031rem;
  }
`;

export default Preheader;
