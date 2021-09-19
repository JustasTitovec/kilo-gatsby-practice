import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Preheader from './sections/Preheader';
import Header from './sections/Header';
import PlansOrderCount from './sections/PlansOrderCount';
import PlansSection from './sections/PlansSection';
import SuccessStoriesSection from './sections/SuccessStoriesSection';
import AppSection from './sections/AppSection';
import QuestionsSection from './sections/QuestionsSection';

const Checkout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Preheader />
      <Header />
      <PlansOrderCount />
      <PlansSection title="Get access to your yoga program now!" />
      <SuccessStoriesSection />
      <AppSection />
      <QuestionsSection />
      <PlansSection title="Start your yoga program today!" />
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

const theme = {};

export default Checkout;
