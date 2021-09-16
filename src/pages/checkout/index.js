import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useRouter } from 'apis/history';
import { useQuery } from 'styles/breakpoints';
import { Button, Image, PrimaryButton } from 'components';
const Checkout = () => {
  const { isMobile, isTablet } = useQuery();
  const { goToLanding } = useRouter();
  return (
    <SectionWrapper>
      checkout
      <Link to="/">{isTablet && <Button>Click</Button>}</Link>
      {isTablet && (
        <PrimaryButton color="black" onClick={goToLanding}>
          Primary
        </PrimaryButton>
      )}
      <Image src="photo" />
    </SectionWrapper>
  );
};
const SectionWrapper = styled.div`
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: darkblue;
`;
export default Checkout;
