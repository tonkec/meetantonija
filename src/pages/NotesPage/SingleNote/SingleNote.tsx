import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Text from 'components/Text';
import Header from 'components/Header';
import Section from 'components/Section';
import Layout from 'components/Layout';
import { MainContainer } from 'styles/containers';
import GoHome from 'components/GoHome';

const SingleNote = () => {
  const [text, setText] = useState('');
  const { id } = useParams();

  useEffect(() => {
    import(`./../notes/${id}.md`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setText(response))
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <Layout>
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
              <Section padding="medium" backgroundColor="#f5f5f5">
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

      <GoHome />
    </Layout>
  );
};

export default SingleNote;
