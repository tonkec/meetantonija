import { useEffect, useState } from 'react'

const TypedText = ({ children, type, speed =20 }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!children) return;

    const textArray = children.split("");
    let i = 0;

    const interval = setInterval(() => {
      if (i < textArray.length -1) {
        setText((prev) => prev + textArray[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  if (type === 'h1') return <h1 className="typed-text">{text}</h1>;
  if (type === 'h2') return <h2 className="typed-text">{text}</h2>;
  if (type === 'h3') return <h3 className="typed-text">{text}</h3>;
  if (type === 'h4') return <h4 className="typed-text">{text}</h4>;
  if (type === 'h5') return <h5 className="typed-text">{text}</h5>;
  if (type === 'h6') return <h6 className="typed-text">{text}</h6>;

  return <p className="typed-text">{text}</p>;
};

export default TypedText
