import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Text from 'components/Text';
import Header from 'components/Header';
import Section from 'components/Section';
import Layout from 'components/Layout';
import { MainContainer } from 'styles/containers';
import GoHome from 'components/GoHome';
import Loader from 'components/Loader';
import NextObject from 'components/NextObject';
import NotesImage from '../NotesImage/NotesImage';
import { notes } from '../notes/notes';
import ReadingIndicator from '../ReadingIndicator/ReadingIndicator';
import ContactMe from 'components/ContactMe';

const SingleNote = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const current = notes.filter((note) => note.id === id)[0];
  const nextProject = notes
    .filter((note) => note !== current)
    .sort(() => 0.5 - Math.random());

  useEffect(() => {
    import(`./../notes/${id}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((response) => {
            setLoading(false);
            setText(response);
          })
          .catch((err) => {
            console.log(err);
            navigate('/');
          });
      })
      .catch(() => navigate('/404'));
  }, [id, navigate]);

  return loading ? (
    <Loader
      style={{
        position: 'fixed',
        inset: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  ) : (
    <Layout>
      <ReadingIndicator />
      <ReactMarkdown
        children={text}
        components={{
          h1({ children, ...props }) {
            return (
              <Header backgroundColor="#43CEA2">
                <MainContainer>
                  <div className="row">
                    <div className="col-xs-12">
                      <Text {...props} type="h1" color="#292929">
                        {children}
                      </Text>
                    </div>
                  </div>
                </MainContainer>
              </Header>
            );
          },
          p({ children, ...props }) {
            return (
              <Section padding="small" backgroundColor="#f5f5f5">
                <MainContainer>
                  <div className="row">
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                      <Text {...props} type="p" color="#292929">
                        {children}
                      </Text>
                    </div>
                  </div>
                </MainContainer>
              </Section>
            );
          },
          img({ src }) {
            return <NotesImage src={src} />;
          },
          code({ node, inline, className, children, ...props }) {
            return (
              <Section padding="small" backgroundColor="#f5f5f5">
                <MainContainer>
                  <div className="row">
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                      <SyntaxHighlighter
                        {...props}
                        children={String(children).replace(/\n$/, '')}
                        language={'Javascript'}
                        PreTag="div"
                        style={nord}
                      />
                    </div>
                  </div>
                </MainContainer>
              </Section>
            );
          },
        }}
      />
      <ContactMe backgroundColor="#E6F0FF" />
      <NextObject item={nextProject[0]} />
      <GoHome heading="Thanks for reading!" />
    </Layout>
  );
};

export default SingleNote;
