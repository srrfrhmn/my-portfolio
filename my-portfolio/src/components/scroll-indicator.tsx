import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ScrollDown } from '@/lib/info';

const ScrollIndicator = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const router = useRouter();

  const checkScrollPosition = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.offsetHeight;

    setIsAtBottom(scrollTop + windowHeight >= docHeight);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      checkScrollPosition();
    };

    window.addEventListener('scroll', checkScrollPosition);
    router.events.on('routeChangeComplete', handleRouteChange); // Listen for route changes

    checkScrollPosition(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      router.events.off('routeChangeComplete', handleRouteChange); // Stop listening when component unmounts
    };
  });

  return (
    <div className={`indicator ${isAtBottom ? 'hidden' : ''}`}>
      <ScrollDown />
    </div>
  );
};

export default ScrollIndicator;