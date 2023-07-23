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
      <Header backgroundColor="#f5f5f5">
        <Text type="h1" color="#292929">
          Notes
        </Text>

        <div className="row">
          <div className="col-xs-12" style={{ marginTop: 100 }}>
            <NotesList>
              {notes.map((note) => {
                return (
                  <Link to={`/notes/${note.id}`}>
                    <li>
                      <span>
                        <Text type="h4" color="#292929">
                          {note.title}
                        </Text>
                        <Text type="h5" color="#292929">
                          {note.subtitle}
                        </Text>
                      </span>
                      <span>{note.icon()}</span>
                    </li>
                  </Link>
                );
              })}
            </NotesList>
          </div>
        </div>
      </Header>
    </Layout>
  );
};

export default NotesPage;
