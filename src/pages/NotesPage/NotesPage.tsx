import Layout from 'components/Layout';
import Header from 'components/Header';
import Text from 'components/Text';
import Section from 'components/Section';
import { notes } from './notes/notes';
import { NotesList } from './NotesPage.styles';
import { Link } from 'react-router-dom';

const NotesPage = () => {
  return (
    <Layout>
      <Header backgroundColor="#f5f5f5">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <Text type="h1" color="#292929">
              Notes.
            </Text>

            <Text type="p" color="#292929">
              My notes are mostly about the technology I use every day, but you
              might see a book review as well.
            </Text>
          </div>
        </div>
      </Header>

      <Section backgroundColor="#f5f5f5" padding="small">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <NotesList>
              {notes.reverse().map((note) => {
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
      </Section>
    </Layout>
  );
};

export default NotesPage;
