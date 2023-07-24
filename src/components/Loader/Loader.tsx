import { ColorRing } from 'react-loader-spinner';
const Loader = () => (
  <div
    style={{
      position: 'fixed',
      inset: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#43cea2', '#43cea2', '#43cea2', '#43cea2', '#43cea2']}
    />
  </div>
);

export default Loader;
