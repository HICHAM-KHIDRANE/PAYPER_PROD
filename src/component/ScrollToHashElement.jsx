import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation();
  const navbarHeight = 50;

  useEffect(() => {
    const handleScroll = () => {
      const elementId = location.hash ? location.hash.slice(1) : null;
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    handleScroll();

    window.addEventListener('hashchange', handleScroll);

    return () => {
      window.removeEventListener('hashchange', handleScroll);
    };
  }, [location]);

  return null;
}

export default ScrollToAnchor;
