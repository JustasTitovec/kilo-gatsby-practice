import React from 'react';
import styled from 'styled-components';
// Typography
import { Caption, H5 } from 'components/index';
// Breakpoints
import { mobile } from 'styles/breakpoints';

interface Props {
  ImgSrc: string;
  title: string;
  subtitle: string;
}

const PlanBenefits: React.FC<Props> = ({ ImgSrc, title, subtitle }) => {
  return (
    <AdvantageItem>
      <img src={ImgSrc} alt="exercise" />
      <AdvantageItemDescription>
        <H5>{title}</H5>
        <Caption>{subtitle}</Caption>
      </AdvantageItemDescription>
    </AdvantageItem>
  );
};

const AdvantageItem = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.5rem;
  margin: 0 0 0.625rem;
  width: 21.875rem;
  @media ${mobile} {
    width: 100%;
  }
  img {
    margin: 0 1rem 0 0;
  }
`;

const AdvantageItemDescription = styled.div`
  @media mobile {
    h5 {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
`;

export default PlanBenefits;
