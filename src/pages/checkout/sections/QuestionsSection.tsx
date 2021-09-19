import React from 'react';
import styled from 'styled-components';
// Components imports
import QuestionItem from '../elements/QuestionItem';
import { SecondaryButton } from '../../../components/buttons/SecondaryButton';
import data from '../../../data';

const QuestionsSection: React.FC = () => {
  const questions = data.questions;

  return (
    <QuestionsContainer>
      <Title>Frequently Asked Questions</Title>
      {questions.map((question, i) => {
        return (
          <QuestionItem
            key={i}
            index={question.index}
            question={question.question}
            answer={question.answer}
          />
        );
      })}

      <SecondaryButton>Get my plan</SecondaryButton>
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
    width: 100%;
    padding: 0rem 1rem;
  }
`;

export default QuestionsSection;
