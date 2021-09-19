import React, { useState } from 'react';
import styled from 'styled-components';
// Icons imports from Material UI
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

interface Props {
  index: number;
  question: string;
  answer: string;
}

const QuestionItem: React.FC<Props> = ({ question, answer, index }) => {
  const [clicked, setClicked] = useState(false);

  const checkWords = (text) => {
    let str = 'Positive Yoga';
    return text.replace(str, str.bold());
  };

  const toggle = (index: number) => {
    if (clicked) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(true);
  };

  return (
    <Question>
      <Wrap onClick={() => toggle(index)}>
        <h5>{question}</h5>
        <span>{clicked ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}</span>
      </Wrap>
      <div>
        {clicked ? (
          <p dangerouslySetInnerHTML={{ __html: checkWords(answer) }}></p>
        ) : null}
      </div>
    </Question>
  );
};

const Question = styled.div`
  width: 740px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  margin: 4px 0px;
  padding: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 95%;
  }

  p {
    font-size: 14px;
    font-weight: 200;
    line-height: 20px;
    margin-top: 16px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  span {
    color: #424242;
    margin-right: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    h5 {
      font-size: 15px;
    }
  }
`;

export default QuestionItem;
