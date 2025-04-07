import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 10, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
