import Layout from 'components/Layout';
import Header from 'components/Header';
import Text from 'components/Text';
import Section from 'components/Section/Section';

const NotesPage = () => {
  return (
    <Layout>
      <Header linearGradient={['#0094D3', '#005EC5']}>
        <Text type="h1" color="white">
          Notes
        </Text>
        <Text type="p" color="white">
          This is a place for my scribbles.
        </Text>
      </Header>

      <Section backgroundColor="#E6F0FF" padding="medium">
        <h2>Here is a small list</h2>
      </Section>
    </Layout>
  );
};

export default NotesPage;
