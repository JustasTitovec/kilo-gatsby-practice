import React, { useState } from 'react';
import styled from 'styled-components';
// Components imports
import SubscriptionPricingItem from '../elements/SubscriptionPricingItem';
import SubscriptionAdvantages from '../elements/SubscriptionAdvantagesItem';
import { Button } from '../../../components/buttons/Button';
// Images imports
import { SideImages } from '../../../utils/images';
// Data from fetching information to component
import data from '../../../data';
// Typography
import { H3, Caption } from '../../../components';
// Colors
import { primaryColor } from '../../../styles/colors';
interface Props {
  title: string;
}

const Subscriptions: React.FC<Props> = ({ title }) => {
  const [option, setOption] = useState(23454);

  const plansTypes = data.plansTypes;
  const advantages = data.subscriptionAdvantages;

  return (
    <Container>
      <ContainerTitle>{title}</ContainerTitle>
      <Offer>
        <Pricing>
          <H3>
            Choose your plan and get{' '}
            <PricingTrial>7 days free trial</PricingTrial>
          </H3>
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
            <Caption opacity={1} className="screen-mobile">
              After 7 days free trial subscription payment is automatically
              charged from your account unless it is canceled at least 24 hours
              before the end of the trial period.
            </Caption>

            <Caption opacity={1} className="screen-desktop">
              Your free trial will automatically become a paid subscription on
              the 8th day after you begin your trial. To cancel your
              subscription, please contact us at least 24 hours before the end
              of the trial period.
            </Caption>
            <br></br>
            <Caption opacity={1}>
              By choosing a payment method you agree to the <span>T&Cs</span>{' '}
              and <span>Privacy Policy</span>
            </Caption>

            <img src={SideImages.paymentMethods} alt="paymentMethods" />
          </Terms>
        </Pricing>
        <AdvantagesContainer>
          <H3>What's in my program?</H3>
          <Advantages>
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
        </AdvantagesContainer>
      </Offer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    h3 {
      font-size: 1.75rem;
      margin: 0.5rem 0rem;
    }
  }
`;

const PricingTrial = styled.span`
  color: ${(props) => props.color || primaryColor};
`;

const AdvantagesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Offer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Advantages = styled.div`
  margin-top: 1.25rem;
`;

const Pricing = styled.div`
  margin-right: 2.375rem;
  width: 21.875rem;
  h3 {
    font-size: 1.5rem;
    span {
      color: ${(props) => props.theme.fontColour};
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    margin-right: 0rem;

    width: 21.875rem;
    h3 {
      font-size: 1.25rem;
      margin: 1rem 0rem;
      line-height: 1.75rem;
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
  text-align: center;
  margin: 0.5rem 0rem;
  span {
    color: #90caf9;
    cursor: pointer;
  }
  img {
    margin-top: 1.25rem;
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
  margin: 0.5rem 0rem;
  text-align: center;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    text-align: left;
  }
`;

export default Subscriptions;
