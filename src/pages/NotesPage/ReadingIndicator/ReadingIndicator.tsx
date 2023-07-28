import { useState, useEffect } from 'react';
import { HorizontalBar } from './ReadingIndicator.styles';

function ReadingIndicator() {
  const [indicator, setIndicator] = useState(0);

  const scroller = () => {
    const element = document.documentElement,
      top = element.scrollTop || document.body.scrollTop,
      height = element.scrollHeight || document.body.scrollHeight;
    const calculate = (top / (height - element.clientHeight)) * 100;
    console.log(calculate);
    setIndicator(calculate);
  };

  useEffect(() => {
    window.addEventListener('scroll', scroller);
    return () => window.removeEventListener('scroll', scroller);
  }, [indicator]);
  return <HorizontalBar style={{ width: `${indicator}%` }}></HorizontalBar>;
}
export default ReadingIndicator;
