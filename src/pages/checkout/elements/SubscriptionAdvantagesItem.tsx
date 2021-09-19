import React from 'react';
import styled from 'styled-components';

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
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </AdvantageItemDescription>
    </AdvantageItem>
  );
};

const AdvantageItem = styled.div`
  display: flex;
  align-items: center;
  line-height: 24px;
  margin-bottom: 10px;
  width: 350px;
  @media (max-width: 480px) {
    width: 100%;
  }
  img {
    margin-right: 16px;
  }
  div {
    p {
      font-size: 12px;
      line-height: 20px;
      font-weight: 200;
      color: #22222c;
    }
  }
`;

const AdvantageItemDescription = styled.div`
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  @media (max-width: 480px) {
    h5 {
      font-size: 15px;
      font-weight: 600;
    }
  }
`;

export default SubscriptionAdvantagesItem;
