import { navigate } from 'gatsby';

export const useRouter = () => {
  return {
    goToLanding: () => navigate('/'),
    gotToCheckOut: () => navigate('/checkout'),
    goBack: () => navigate(-1),
  };
};
