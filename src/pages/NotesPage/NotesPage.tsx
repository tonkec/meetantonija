import Layout from 'components/Layout';
import Header from 'components/Header';
import Text from 'components/Text';
import Section from 'components/Section';
import { notes } from './notes/notes';
import { NotesList } from './NotesPage.styles';
import { Link } from 'react-router-dom';
import { MainContainer } from 'styles/containers';

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
        <MainContainer>
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-lg-6">
              <NotesList>
                {notes.map((note) => {
                  return (
                    <Link to={`/notes/${note.id}`}>
                      <li>
                        <Text type="h4" color="#292929">
                          {note.title}
                        </Text>

                        <Text type="h5" color="#292929">
                          {note.subtitle}
                        </Text>
                      </li>
                    </Link>
                  );
                })}
              </NotesList>
            </div>
          </div>
        </MainContainer>
      </Section>
    </Layout>
  );
};

export default NotesPage;
