import { useRef } from 'react';
import useElementOnScreen from 'hooks/useElementOnScreen';

const AnimateIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        transform: onScreen ? 'translateX(0%)' : 'translateX(-100%)',
        transition: '600ms ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateIn;
