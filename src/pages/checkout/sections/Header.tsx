import React from 'react';
import styled from 'styled-components';
// Images imports
import { SideImages } from 'utils/images.ts';

const Header: React.FC = () => {
  return (
    <Container className="header">
      <img src={SideImages.yogaLogo} alt="yoga-logo" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  background-color: #ffffff;
  box-shadow: 0rem 0.5rem 1.5rem rgba(0, 0, 0, 0.04);
`;

export default Header;
