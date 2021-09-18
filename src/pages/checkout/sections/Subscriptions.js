import React, { useState } from 'react';
import styled from 'styled-components';
// Components imports
import SubscriptionPricingItem from '../elements/SubscriptionPricingItem';
import SubscriptionAdvantages from '../elements/SubscriptionAdvantages';
import Button from '../../../components/buttons/Button';
// Images imports
import { SideImages } from 'utils/images.ts';
// Data from fetching information to component
import data from '../../../data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    width: 100%;
    h3 {
      font-size: 28px;
      margin: 8px 0px;
    }
  }
`;

const Offer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0px;
    align-items: center;
  }
`;

const Advantages = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 32px;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
      margin: 24px 0px;
    }
  }
`;

const Pricing = styled.div`
  margin-right: 38px;
  width: 350px;
  h3 {
    font-size: 24px;
    span {
      color: ${(props) => props.theme.fontColour};
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    width: 350px;
    h3 {
      font-size: 20px;
      margin: 16px 0px;
      line-height: 28px;
      span {
        color: ${(props) => props.theme.fontColour};
      }
    }
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Terms = styled.div`
  width: 100%;
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  letter-spacing: 0.5px;
  margin: 8px 0px;
  font-weight: 200;
  span {
    color: #90caf9;
    cursor: pointer;
  }
  img {
    margin-top: 20px;
    width: 100%;
  }
  .screen-desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .screen-mobile {
    @media (max-width: 768px) {
      display: block;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const ContainerTitle = styled.h1`
  margin: 8px 0px;
  text-align: center;
  font-size: 40px;
  @media (max-width: 480px) {
    text-align: left;
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subscriptions = ({ title }) => {
  const [option, setOption] = useState(23454);

  const plansTypes = data.plansTypes;
  const advantages = data.subscriptionAdvantages;

  return (
    <Container>
      <ContainerTitle>{title}</ContainerTitle>
      <Offer>
        <Pricing>
          <h3>
            Choose your plan and get <span>7 days free trial</span>
          </h3>
          {plansTypes.map((type, i) => {
            return (
              <SubscriptionPricingItem
                key={i}
                planDuration={type.planDurationMonths}
                monthPrice={type.monthPrice}
                priceWithoutDiscount={type.priceWithoutDiscount}
                index={type.id}
                option={option}
                setOption={setOption}
              />
            );
          })}
          <Button>Get your plan</Button>
          <Terms>
            <p className="screen-mobile">
              After 7 days free trial subscription payment is automatically
              charged from your account unless it is canceled at least 24 hours
              before the end of the trial period.
            </p>
          </Terms>
          <Terms>
            <p className="screen-desktop">
              Your free trial will automatically become a paid subscription on
              the 8th day after you begin your trial. To cancel your
              subscription, please contact us at least 24 hours before the end
              of the trial period.
            </p>
          </Terms>
          <Terms>
            By choosing a payment method you agree to the <span>T&Cs</span> and{' '}
            <span>Privacy Policy</span>
            <img src={SideImages.paymentMethods} alt="paymentMethods" />
          </Terms>
        </Pricing>

        <Advantages>
          <h3>What's in my program?</h3>
          {advantages.map((advantage, index) => {
            return (
              <SubscriptionAdvantages
                key={index}
                ImgSrc={advantage.ImgSrc}
                title={advantage.title}
                subtitle={advantage.subtitle}
              />
            );
          })}
        </Advantages>
      </Offer>
    </Container>
  );
};

export default Subscriptions;
