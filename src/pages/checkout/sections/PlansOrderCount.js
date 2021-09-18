import React from 'react';
import styled from 'styled-components';

const PlansOrderCountItem = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  @media (max-width: 450px) {
    width: 100%;
    padding: 0px 16px;
    margin-top: 16px;
    justify-content: flex-start;
  }
  p {
    font-size: 14px;
    font-weight: 200;
  }
  span {
    font-weight: 600;
  }
`;

const PlansOrderCount = () => {
  return (
    <PlansOrderCountItem>
      <p>
        {' '}
        Over <span> 52 147</span> plans ordered.
      </p>
    </PlansOrderCountItem>
  );
};

export default PlansOrderCount;
