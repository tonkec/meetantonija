import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Text from 'components/Text/Text';
import Section from 'components/Section/Section';
import ReadingIndicator from 'pages/NotesPage/ReadingIndicator/ReadingIndicator';
import useImage from 'hooks/useImage';
import me1 from 'images/me1.jpg';
import me2 from 'images/me2.jpg';
import me3 from 'images/me3.jpeg';
import me4 from 'images/me4.jpg';
import me5 from 'images/me5.jpg';
import me6 from 'images/me6.jpg';
import me7 from 'images/me7.jpg';
import Loader from 'components/Loader/Loader';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const AboutPage = () => {
  const image1Loading = useImage(me1);
  const image2Loading = useImage(me2);
  const image3Loading = useImage(me3);
  const image4Loading = useImage(me4);
  const image5Loading = useImage(me5);
  const image6Loading = useImage(me6);
  const image7Loading = useImage(me7);
  return (
    <Layout>
      <ReadingIndicator />
      <Header backgroundColor="#0047B4">
        <Text type="h1" color="#f5f5f5">
          About me
        </Text>
        <Text type="p" color="#f5f5f5">
          Who am I and what do I bring to the table?
        </Text>
      </Header>

      <Section padding="medium" backgroundColor="#f5f5f5">
        <div className="row">
          <div
            className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-3"
            style={{ marginBottom: 50 }}
          >
            <Text type="h2" color="#292929">
              Why am I coding at all?
            </Text>

            <Text type="p" color="#292929" style={{ marginTop: 30 }}>
              I started coding because I wanted a change in my career, I wanted
              to have a future and be competitive in the market. Initially, I
              had been learning Ruby on Rails when I tried CSS and Javascript,
              and instantly fell in love with those languages. I could
              immediately see the result of my coding. It was back in 2013 and I
              was super active user on Codecademy, the online learning platform
              for coding.
            </Text>
          </div>

          <div
            className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-3"
            style={{ marginBottom: 50 }}
          >
            <Text type="h2" color="#292929">
              Why should you hire me exactly?
            </Text>

            <Text type="p" color="#292929" style={{ marginTop: 30 }}>
              I believe I bring a lot of value to the table. I honestly care
              about the code I am writing and the product I am working on. I am
              super picky about the projects since I want to build impressive
              portfolio. I don't want to just work on something just to be
              working on something. I always ask myself how will this project
              look like in my CV?
            </Text>
            <Text type="p" color="#292929" style={{ marginTop: 30 }}>
              About the values I bring, I am resistent, dilligent and effective.
              I mean I taught myself to code without anyone's help. One day I
              woke up and just decided today was the day I would start coding. I
              did not go to any school nor bootcamp. I just used free services
              like Freecodecamp, Code School (r.i.p.) and Codecademy.
            </Text>
          </div>

          <div
            className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-3"
            style={{ marginBottom: 50 }}
          >
            <Text type="h2" color="#292929">
              Am I lacking the academic experience?
            </Text>

            <Text type="p" color="#292929" style={{ marginTop: 30 }}>
              I do not have a diploma in the software development, but I have
              been coding for so long now, almost ten years. I believe I can
              compete with anyone who has a diploma. I mean college graduates
              will probably know less than me. I am up to date with all the
              latest technologies and I follow several blogs and youtubers to
              see the latest shiny thing in front-end development.
            </Text>
          </div>

          <div
            className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-3"
            style={{ marginBottom: 50 }}
          >
            <Text type="h2" color="#292929">
              What am I doing in m my free time?
            </Text>

            <Text type="p" color="#292929" style={{ marginTop: 30 }}>
              A lot of things and when I say a lot I mean a looooot. I drum in
              the drumming collective where we fight for human and animal
              rights. I read, mostly fiction and comic books. I play basketball,
              go to the gym, swim and ride bicycle.
            </Text>
          </div>

          <div
            className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-3"
            style={{ marginBottom: 50 }}
          >
            <Text type="h2" color="#292929">
              What are some of the accomplishments I am proud of?
            </Text>

            <Text type="p" color="#292929" style={{ marginTop: 30 }}>
              I organised css meetup in Zagreb (before corona took over). I
              volunteered in borders:none; organization were we encouraged
              refugees to start coding. I started a coding school called
              Kodiraonica where I lead a team of developers in a quest to teach
              others to code.
            </Text>
          </div>

          <div
            className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-3"
            style={{ marginBottom: 50 }}
          >
            <Text type="h2" color="#292929">
              Do I really know how to center a div?
            </Text>

            <Text type="p" color="#292929" style={{ marginTop: 30 }}>
              Yes, with flexbox!
            </Text>
          </div>

          <div
            className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-3"
            style={{ marginBottom: 50 }}
          ></div>
        </div>
      </Section>

      <Section padding="medium" backgroundColor="#f5f5f5">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px" columnsCount={5}>
            {image2Loading ? <Loader /> : <img src={me2} alt="me" />}
            {image3Loading ? <Loader /> : <img src={me3} alt="me" />}
            {image4Loading ? <Loader /> : <img src={me4} alt="me" />}
            {image5Loading ? <Loader /> : <img src={me5} alt="me" />}
            {image6Loading ? <Loader /> : <img src={me6} alt="me" />}
            {image7Loading ? <Loader /> : <img src={me7} alt="me" />}{' '}
            {image1Loading ? <Loader /> : <img src={me1} alt="me" />}
          </Masonry>
        </ResponsiveMasonry>
      </Section>
    </Layout>
  );
};

export default AboutPage;
