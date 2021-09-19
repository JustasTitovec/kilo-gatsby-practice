import React from 'react';
import styled from 'styled-components';

const PlansOrderCount = () => {
  return (
    <PlansOrderCountItem>
      <p>
        Over <span> 52 147</span> plans ordered.
      </p>
    </PlansOrderCountItem>
  );
};

const PlansOrderCountItem = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  @media (max-width: 450px) {
    width: 100%;
    padding: 0rem 1rem;
    margin-top: 1rem;
    justify-content: flex-start;
  }
  p {
    font-size: 0.875rem;
    font-weight: 200;
  }
  span {
    font-weight: 600;
  }
`;

export default PlansOrderCount;
