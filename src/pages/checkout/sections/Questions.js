import React from 'react';
import styled from 'styled-components';
// Components imports
import QuestionItem from '../elements/QuestionItem';
import Button from '../../../components/buttons/Button';
import data from '../../../data';

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin: 8px 0px;
  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
    padding: 0px 16px;
  }
`;

const SecondaryButton = styled(Button)`
  margin: 48px 0px;
`;

const Questions = () => {
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

      <SecondaryButton className={SecondaryButton}>Get my plan</SecondaryButton>
    </QuestionsContainer>
  );
};

export default Questions;
