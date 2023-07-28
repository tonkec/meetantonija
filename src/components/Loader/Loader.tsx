import { ColorRing } from 'react-loader-spinner';
const Loader = ({ style }: { style: React.CSSProperties }) => (
  <div style={style}>
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
