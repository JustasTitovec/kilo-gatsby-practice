import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useRouter } from 'apis/history';
import { useQuery } from 'styles/breakpoints';
import {
  Button,
  Image,
  PrimaryButton,
  SecondaryButton,
  H1,
  H2,
  H3,
  Regular,
  Small,
  Caption,
  TextBaseBold,
} from 'components';

const Checkout = () => {
  const { isMobile, isTablet } = useQuery();
  const { goToLanding } = useRouter();

  return (
    <SectionWrapper>
      checkout typescriptgg
      {isMobile && (
        <Link to="/">
          <Button>Click</Button>
        </Link>
      )}
      {isTablet && (
        <PrimaryButton color="black" onClick={goToLanding}>
          Primary
        </PrimaryButton>
      )}
      <SecondaryButton>Click me</SecondaryButton>
      <Image src="lp_image" />
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <Regular>Regular text</Regular>
      <Small>Small Text</Small>
      <Caption>Caption Text</Caption>
      <TextBaseBold>Some bolded text</TextBaseBold>
    </SectionWrapper>
  );
};
const SectionWrapper = styled.div`
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: lightgray;
`;

export default Checkout;
