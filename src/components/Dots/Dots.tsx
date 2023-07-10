import Secret from '../Secret';
import { Dot } from './Dot.styles';

const Dots = () => {
  return (
    <>
      <Dot width="10" height="10" backgroundColor="#ffffff" />
      <Dot width="10" height="10" backgroundColor="#ffffff" />
      <Secret
        secretName="first"
        style={{ position: 'static', display: 'inline-block' }}
        dotBackground="#44756b"
      />
    </>
  );
};

export default Dots;
