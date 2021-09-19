import React from 'react';
import styled from 'styled-components';
// Images imports
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// Colors
import { primaryColor, textTransparent } from '../../../styles/colors';

interface Props {
  planDuration: number;
  monthPrice: number;
  priceWithoutDiscount: number;
  index: number;
  option: number;
  setOption: (index: number) => void;
}

const PlanCard: React.FC<Props> = ({
  planDuration,
  monthPrice,
  priceWithoutDiscount,
  index,
  option,
  setOption,
}) => {
  return (
    <Option
      onClick={() => setOption(index)}
      style={
        option === index
          ? { border: `0.125rem solid ${primaryColor}` }
          : { border: `0.125rem solid ${textTransparent}` }
      }
    >
      <PlanItem>
        <h5>
          {planDuration} month plan{' '}
          <span
            style={
              option === index && planDuration > 1
                ? { visibility: 'visible' }
                : { visibility: 'hidden' }
            }
          >
            Save{' '}
            {Math.abs(
              Math.ceil(
                (planDuration * monthPrice * 100) / priceWithoutDiscount - 100
              )
            )}
            %
          </span>
        </h5>
        <h2>
          <span>${monthPrice} </span>/ month
        </h2>

        {planDuration > 1 ? (
          <PricingDeal>
            <del>${priceWithoutDiscount}</del>
            <span>${planDuration * monthPrice}</span> billed every{' '}
            {planDuration} months
          </PricingDeal>
        ) : (
          <PricingDeal>Billed monthly</PricingDeal>
        )}
      </PlanItem>
      <SelectedItemCheck>
        {option === index ? <CheckIcon /> : <div className="checkCircle"></div>}
      </SelectedItemCheck>
    </Option>
  );
};

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8.125rem;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 120px;
    width: 100%;
  }

  .checkCircle {
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${textTransparent};
    border-radius: 50%;
  }
`;

const PlanItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5 {
    font-size: 1rem;
    font-weight: 600;
    span {
      background-color: #ffe082;
      padding: 0.313rem;
      border-radius: 0.375rem;
      font-size: 0.75rem;
      font-weight: 700;
      margin: 0rem 0.5rem;
    }
  }

  h2 {
    font-size: 0.875rem;
    font-weight: 400;

    span {
      font-size: 2rem;
      font-weight: 700;
    }
  }
  @media (max-width: 480px) {
    h5 {
      font-size: 0.938rem;
    }
    h2 {
      span {
        font-size: 1.5rem;
      }
    }
  }
`;

const SelectedItemCheck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PricingDeal = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  span {
    margin-left: 0.5rem;
    color: ${primaryColor};
    font-weight: 700;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const CheckIcon = styled(CheckCircleIcon)`
  color: ${primaryColor};
`;

export default PlanCard;
