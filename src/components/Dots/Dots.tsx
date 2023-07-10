import Secret from '../Secret';
import { Dot } from './Dot.styles';

const Dots = () => {
  return (
    <>
      <Dot width="10" height="10" backgroundColor="#ffffff" />
      <Dot width="10" height="10" backgroundColor="#ffffff" />
      <Secret />
    </>
  );
};

export default Dots;
