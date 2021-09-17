import { useMediaQuery } from 'react-responsive';

export const smMobile = '(max-width: 24rem)';
export const mobile = '(max-width: 30rem)';
export const tablet = '(max-width: 40rem)';

export const useQuery = () => ({
  isMobile: useMediaQuery({ query: mobile }),
  isTablet: useMediaQuery({ query: tablet }),
});
