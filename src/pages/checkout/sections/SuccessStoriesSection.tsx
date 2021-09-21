import React from 'react';
import styled from 'styled-components';
// Components imports
import { SecondaryButton } from 'components/buttons/SecondaryButton';
import SuccessStoryItem from '../elements/SuccessStoryItem';
// Data from fetching information to component
import data from 'data';
// Breakpoints
import { tablet } from 'styles/breakpoints';

const SuccessStoriesSection: React.FC = () => {
  let stories = data.successStories;

  return (
    <SuccessStoriesContainer>
      <h3>Hear success stories from our clients</h3>
      <SuccessStories>
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
      </SuccessStories>
      <SecondaryButton>Get my plan</SecondaryButton>
    </SuccessStoriesContainer>
  );
};

const SuccessStories = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media ${tablet} {
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
    font-size: 1.5rem;
    margin: 1.5rem 0rem;
    color: #22222c;
  }

  @media ${tablet} {
    padding: 0rem 1rem;

    h3 {
      padding: 0rem 0.813rem;
      font-size: 1.25rem;
    }
  }
`;

export default SuccessStoriesSection;
