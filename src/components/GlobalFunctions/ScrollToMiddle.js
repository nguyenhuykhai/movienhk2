import React, { useEffect } from 'react';

const ScrollToMiddle = () => {
  useEffect(() => {
    const scrollToMiddle = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const middlePosition = scrollHeight / 2 - clientHeight / 2;
      window.scrollTo({ top: middlePosition, behavior: 'smooth' });
    };

    scrollToMiddle(); // Scroll to the middle on component mount

    // Optionally, you can also scroll to the middle on window resize
    window.addEventListener('resize', scrollToMiddle);

    return () => {
      window.removeEventListener('resize', scrollToMiddle); // Cleanup the event listener
    };
  }, []);

  return null;
};

export default ScrollToMiddle;