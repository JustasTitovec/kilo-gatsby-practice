import React from 'react';
import styled from 'styled-components';
// Images imports
import { SideImages } from 'utils/images.ts';

const Preheader = () => {
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
  height: 56px;
  background-color: #90caf9;
  img {
    margin-right: 18px;
  }
  p {
    color: #ffffff;
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 0.5px;
    span {
      font-weight: 400;
    }
  }
`;

export default Preheader;
