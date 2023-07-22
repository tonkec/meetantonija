import { useEffect, RefObject, useState } from 'react';

function useElementOnScreen(ref: RefObject<Element>, rootMargin = '0px') {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.top > 0) {
          setIsIntersecting(entry.isIntersecting);
        }
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

export default useElementOnScreen;
