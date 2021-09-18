import React from 'react';
import styled from 'styled-components';
// Images imports
import { SideImages } from 'utils/images.ts';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
`;

const Header = () => {
  return (
    <Container className="header">
      <img src={SideImages.yogaLogo} alt="yoga-logo" />
    </Container>
  );
};

export default Header;
