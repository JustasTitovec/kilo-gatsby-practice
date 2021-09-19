import React from 'react';
import styled from 'styled-components';
// Components imports
import { SecondaryButton } from '../../../components/buttons/SecondaryButton';
import SuccessStoryItem from '../elements/SuccessStoryItem';
// Data from fetching information to component
import data from '../../../data';

const SuccessStories: React.FC = () => {
  let stories = data.successStories;

  return (
    <SuccessStoriesContainer>
      <h3>Hear success stories from our clients</h3>
      <SuccessStoriesSection>
        {stories.map((story) => {
          return (
            <SuccessStoryItem
              key={story.id}
              name={story.name}
              place={story.place}
              ratingValue={story.ratingValue}
              personImg={story.personImg}
              story={story.story}
            />
          );
        })}
      </SuccessStoriesSection>
      <SecondaryButton>Get my plan</SecondaryButton>
    </SuccessStoriesContainer>
  );
};

const SuccessStoriesSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SuccessStoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 24px;
    margin: 24px 0px;
    color: #22222c;
  }

  @media (max-width: 768px) {
    padding: 0px 16px;

    h3 {
      padding: 0px 13px;
      font-size: 20px;
    }
  }
`;

export default SuccessStories;