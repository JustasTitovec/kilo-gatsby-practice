import React from 'react';
import styled from 'styled-components';
// Typography
import { Caption, H5 } from '../../../components/index';

interface Props {
  ImgSrc: string;
  title: string;
  subtitle: string;
}

const SubscriptionAdvantagesItem: React.FC<Props> = ({
  ImgSrc,
  title,
  subtitle,
}) => {
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
  margin-bottom: 0.625rem;
  width: 21.875rem;
  @media (max-width: 480px) {
    width: 100%;
  }
  img {
    margin-right: 1rem;
  }
`;

const AdvantageItemDescription = styled.div`
  @media (max-width: 480px) {
    h5 {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
`;

export default SubscriptionAdvantagesItem;
