import React from 'react';
import styled from 'styled-components';
// Images
import { PhoneAppImages, SideImages } from 'utils/images.ts';
// Data from fetching information to component
import data from 'data';
// Breakpoints
import { smMobile, mobile, tablet } from 'styles/breakpoints';

const AppSection: React.FC = () => {
  const appCheckList = data.appCheckList;

  return (
    <AppReviewContainer>
      <PhoneAppSide>
        <h3>Start your yoga journey now!</h3>
        <AppIcons>
          <AppIconsBackground>
            <img src={SideImages.background} alt="phoneApp" />
          </AppIconsBackground>
          <AppIconsLeft>
            <img src={PhoneAppImages.phone_app_1} alt="phoneApp" />
          </AppIconsLeft>
          <AppIconsRight>
            <img src={PhoneAppImages.phone_app_2} alt="phoneApp" />
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
  @media ${tablet} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const PhoneAppSide = styled.div`
  margin: 0rem 2rem;
  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0rem;
  }
  @media ${tablet} {
    h3 {
      font-size: 1.25rem;
      padding: 0rem 1rem;
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
  @media ${tablet} {
    visibility: visible;
  }
  @media ${smMobile} {
    img {
      width: 20rem;
    }
  }
`;

const AppCheckList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0rem 1rem;
  width: 22.5rem;
  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0rem;
  }
  @media ${tablet} {
    h3 {
      font-size: 1.25rem;
    }
  }
  @media ${mobile} {
    margin: 0rem 1rem;
    width: 100%;
  }
`;

const AppIconsLeft = styled.div`
  position: absolute;
  margin-top: -0.625rem;
  @media ${smMobile} {
    img {
      width: 10rem;
      margin-left: 0.813rem;
    }
  }
`;

const AppIconsRight = styled.div`
  position: absolute;
  margin-top: 2.813rem;
  margin-left: 12.125rem;
  @media ${smMobile} {
    img {
      width: 130px;
      margin-left: -0px;
    }
  }
`;

const CheckItem = styled.li`
  display: flex;
  list-style: none;
  margin: 0.5rem 0rem;
  align-items: center;
`;

const CheckItemTextImage = styled.img`
  margin-right: 1rem;
`;

const CheckItemText = styled.ul`
  font-weight: 200;
  font-size: 0.875rem;
  letter-spacing: 0.025rem;
  line-height: 1.25rem;
  color: #424242;
`;

export default AppSection;
