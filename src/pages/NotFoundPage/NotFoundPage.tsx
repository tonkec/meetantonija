import Error from 'components/Error';
import { TbUfo } from 'react-icons/tb';

const NotFoundPage = () => (
  <Error heading="404, not found!" icon={() => <TbUfo />} />
);

export default NotFoundPage;
