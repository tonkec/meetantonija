'use client';
import { useWindowSize } from '@/app/hooks/useWindowSize';

const Sqaures = () => {
  const size = useWindowSize();
  return (
    <div className="flex-1">
      <div
        className="box"
        style={{ borderWidth: size.width / 2 / 4 / 2 }}
      ></div>
      <div
        className="box"
        style={{ borderWidth: size.width / 2 / 4 / 2 }}
      ></div>
      <div
        className="box"
        style={{ borderWidth: size.width / 2 / 4 / 2 }}
      ></div>
      <div
        className="box"
        style={{ borderWidth: size.width / 2 / 4 / 2 }}
      ></div>
    </div>
  );
};

export default Sqaures;
