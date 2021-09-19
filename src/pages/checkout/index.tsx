import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Preheader from './sections/Preheader';
import Header from './sections/Header';
import PlansOrderCount from './sections/PlansOrderCount';
import Subscriptions from './sections/Subscriptions';
import SuccessStories from './sections/SuccessStories';
import AppSection from './sections/AppSection';
import Questions from './sections/Questions';

const Checkout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Preheader />
      <Header />
      <PlansOrderCount />
      <Subscriptions title="Get access to your yoga program now!" />
      <SuccessStories />
      <AppSection />
      <Questions />
      <Subscriptions title="Start your yoga program today!" />
    </ThemeProvider>
  );
};

const Global = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
`;

const theme = {
  fontColour: '#FF9B4E',
  fontSizeSmall: '12px',
};

export default Checkout;
