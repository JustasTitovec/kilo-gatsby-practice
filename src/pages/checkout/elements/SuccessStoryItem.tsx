import React from 'react';
import styled from 'styled-components';
// Images imports
import { SideImages } from 'utils/images';
import { Caption, H5 } from 'components';
// Breakpoints
import { mobile, tablet } from 'styles/breakpoints';

interface Props {
  name: string;
  place: string;
  ratingValue: number;
  personImg: string;
  story: string;
}

const SuccessStoryItem: React.FC<Props> = ({
  name,
  place,
  ratingValue,
  personImg,
  story,
}) => {
  const checkWords = (text: string) => {
    const str = 'Positive Yoga';
    return text.replace(str, str.bold());
  };

  return (
    <SuccessStory>
      <H5>{name}</H5>
      <Caption>{place}</Caption>
      <Rating>
        <span>
          {ratingValue >= 1 ? (
            <img src={SideImages.rating_star} alt="start" />
          ) : null}
        </span>
        <span>
          {ratingValue >= 2 ? (
            <img src={SideImages.rating_star} alt="start" />
          ) : null}
        </span>
        <span>
          {ratingValue >= 3 ? (
            <img src={SideImages.rating_star} alt="start" />
          ) : null}
        </span>
        <span>
          {ratingValue >= 4 ? (
            <img src={SideImages.rating_star} alt="start" />
          ) : null}
        </span>
        <span>
          {ratingValue >= 5 ? (
            <img src={SideImages.rating_star} alt="start" />
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

const SuccessStory = styled.div`
  margin-right: 1rem;
  margin-bottom: 1.25rem;
  width: 20rem;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0rem 1rem 2rem rgba(57, 53, 60, 0.08);
  border-radius: 1rem;
  @media ${tablet} {
    margin-bottom: 1rem;
    margin-right: 0rem;
  }
  @media ${mobile} {
    width: 100%;
  }
`;

const SuccessStoryText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.5rem;
`;

const Rating = styled.div`
  margin-top: 1.125rem;
`;

export default SuccessStoryItem;
