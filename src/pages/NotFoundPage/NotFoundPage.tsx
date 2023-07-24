import GoHome from 'components/GoHome';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Text from 'components/Text';
import { TbUfo } from 'react-icons/tb';
import { IconWrapper } from './NotFoundPage.styles';

const NotFoundPage = () => (
  <Layout>
    <Header
      backgroundColor="#0047B4"
      style={{ paddingTop: 100, paddingBottom: 100 }}
    >
      <div
        className="row"
        style={{ alignItems: 'center', justifyContent: 'flex-start' }}
      >
        <div
          className="col-lg-6 col-sm-12"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconWrapper>
            <TbUfo />
          </IconWrapper>
        </div>
        <div
          className="col-lg-6 col-sm-12"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text type="h1" color="white">
            You got lost!
          </Text>
        </div>
      </div>
    </Header>

    <GoHome heading="What are you doing here?" />
  </Layout>
);

export default NotFoundPage;
