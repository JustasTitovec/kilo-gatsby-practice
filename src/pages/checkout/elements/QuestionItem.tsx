import React, { useState } from 'react';
import styled from 'styled-components';
// Icons imports from Material UI
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// Typography
import { Small, H5 } from '../../../components/index';
// Breakpoints
// import { tablet } from '../../../styles/breakpoints';

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
        <H5>{question}</H5>
        <span>{clicked ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}</span>
      </Wrap>
      <div>
        {clicked ? (
          <Small
            marginTop="0.5rem"
            dangerouslySetInnerHTML={{ __html: checkWords(answer) }}
          ></Small>
        ) : null}
      </div>
    </Question>
  );
};

const Question = styled.div`
  width: 46.25rem;
  border: 0.063rem solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  margin: 0.25rem 0rem;
  padding: 1rem;
  cursor: pointer;

  @media (max-width: 48rem) {
    width: 95%;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #424242;
    margin-right: 0.375rem;
  }
`;

export default QuestionItem;
