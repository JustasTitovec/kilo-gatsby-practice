import React from 'react';
import styled from 'styled-components';
// Images imports
import { SideImages } from 'utils/images.ts';

const SuccessStory = styled.div`
  margin-right: 16px;
  margin-bottom: 20px;
  width: 320px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  border-radius: 16px;
  @media (max-width: 768px) {
    margin-bottom: 16px;
    margin-right: 0px;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
  h5 {
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.4000000059604645px;
    text-align: left;
  }
  span {
    font-size: 12px;
    opacity: 0.64;
  }
`;

const SuccessStoryText = styled.p`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 200;
  line-height: 24px;
`;

const Rating = styled.div`
  margin-top: 18px;
`;

const SuccessStoryItem = ({ name, place, ratingValue, personImg, story }) => {
  const checkWords = (text) => {
    const str = 'Positive Yoga';
    return text.replace(str, str.bold());
  };

  return (
    <SuccessStory>
      <h5>{name}</h5>
      <span>{place}</span>
      <Rating>
        <span>
          {ratingValue >= 1 ? (
            <img src={SideImages.ratingStar} alt="start" />
          ) : null}
        </span>
        <span>
          {ratingValue >= 2 ? (
            <img src={SideImages.ratingStar} alt="start" />
          ) : null}
        </span>
        <span>
          {ratingValue >= 3 ? (
            <img src={SideImages.ratingStar} alt="start" />
          ) : null}
        </span>
        <span>
          {ratingValue >= 4 ? (
            <img src={SideImages.ratingStar} alt="start" />
          ) : null}
        </span>
        <span>
          {ratingValue >= 5 ? (
            <img src={SideImages.ratingStar} alt="start" />
          ) : null}
        </span>
      </Rating>
      <img src={personImg} alt="person" />
      <SuccessStoryText
        dangerouslySetInnerHTML={{ __html: checkWords(story) }}
      ></SuccessStoryText>
    </SuccessStory>
  );
};

export default SuccessStoryItem;
