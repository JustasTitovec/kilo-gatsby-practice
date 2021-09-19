import React from 'react';
import styled from 'styled-components';
// Images
import { PhoneAppImages } from 'utils/images.ts';
// Data from fetching information to component
import data from '../../../data';

const AppSection = () => {
  const appCheckList = data.appCheckList;

  return (
    <AppReviewContainer>
      <PhoneAppSide>
        <h3>Start your yoga journey now!</h3>
        <AppIcons>
          <AppIconsBackground>
            {/* <img src={background} alt="phoneApp" /> */}
          </AppIconsBackground>
          <AppIconsLeft>
            <img src={PhoneAppImages.phoneApp1} alt="phoneApp" />
          </AppIconsLeft>
          <AppIconsRight>
            <img src={PhoneAppImages.phoneApp2} alt="phoneApp" />
          </AppIconsRight>
        </AppIcons>
      </PhoneAppSide>

      <AppCheckList>
        <h3>Is Positive Yoga right for me?</h3>
        <div>
          {appCheckList.map((checkItem, i) => {
            return (
              <CheckItem key={i}>
                <CheckItemTextImage src={checkItem.checkImage} alt="checkImg" />
                <CheckItemText>{checkItem.checkItemDescription}</CheckItemText>
              </CheckItem>
            );
          })}
        </div>
      </AppCheckList>
    </AppReviewContainer>
  );
};

const AppReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const PhoneAppSide = styled.div`
  margin: 0px 32px;
  h3 {
    font-size: 24px;
    margin: 24px 0px;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
      padding: 0px 16px;
    }
  }
`;

const AppIcons = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const AppIconsBackground = styled.div`
  position: relative;
  visibility: hidden;
  @media (max-width: 768px) {
    visibility: visible;
  }
  @media (max-width: 320px) {
    img {
      width: 320px;
    }
  }
`;

const AppCheckList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px 16px;
  width: 360px;
  h3 {
    font-size: 24px;
    margin: 24px 0px;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
    }
  }
  @media (max-width: 450px) {
    margin: 0px 16px;
    width: 100%;
  }
`;

const AppIconsLeft = styled.div`
  position: absolute;
  margin-top: -10px;
  @media (max-width: 320px) {
    img {
      width: 160px;
      margin-left: 13px;
    }
  }
`;

const AppIconsRight = styled.div`
  position: absolute;
  margin-top: 45px;
  margin-left: 194px;
  @media (max-width: 320px) {
    img {
      width: 130px;
      margin-left: -0px;
    }
  }
`;

const CheckItem = styled.li`
  display: flex;
  list-style: none;
  margin: 8px 0px;
  align-items: center;
`;

const CheckItemTextImage = styled.img`
  margin-right: 16px;
`;

const CheckItemText = styled.ul`
  font-weight: 200;
  font-size: 14px;
  letter-spacing: 0.4px;
  line-height: 20px;
  color: #424242;
`;

export default AppSection;
