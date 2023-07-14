import { Link, useParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import data from 'data/projects.json';
import CtaSection from 'components/CtaSection/CtaSection';
import Layout from 'components/Layout/Layout';
import Text from 'components/Text/Text';
import Section from 'components/Section/Section';
import { FlexContainer, FlexItem } from 'styles/containers';
import { GoArrowLeft } from 'react-icons/go';
import { TextWrapper } from './Project.styles';
import { BackgroundImage } from 'pages/Homepage/Homepage.styles';
import Sitting from 'images/sitting.jpeg';

const Project = () => {
  const routeParams = useParams();
  const { id } = routeParams;
  const current = data.projects.filter(
    (project) => project.title.toLowerCase() === id?.toLowerCase()
  )[0];
  return (
    <Layout>
      <Header backgroundColor="#0047B4">
        <Text type="h1" color="white">
          {current.headline}.
        </Text>
        <Text type="p" color="white">
          {current.title}
        </Text>
      </Header>

      <Section
        padding="none"
        backgroundColor="#005ED0"
        style={{ paddingLeft: 0 }}
      >
        <FlexContainer
          align="center"
          style={{ justifyContent: 'space-between' }}
        >
          <FlexItem>
            <Text type="h4" color="white">
              Year
            </Text>
            <Text type="p" color="white" style={{ marginTop: 20 }}>
              {current.year}
            </Text>
          </FlexItem>
          <FlexItem>
            <Text type="h4" color="white">
              Work
            </Text>
            <Text type="p" color="white" style={{ marginTop: 20 }}>
              Freelance
            </Text>
          </FlexItem>
          <FlexItem>
            <Text type="h4" color="white">
              Website
            </Text>
            <Link
              to={current.link}
              target="_blank"
              style={{ color: 'white', textDecoration: 'none', cursor: 'none' }}
              className="is-clickable"
            >
              <Text type="p" color="white" style={{ marginTop: 20 }}>
                Link
              </Text>
            </Link>
          </FlexItem>
        </FlexContainer>
      </Section>

      <Section backgroundColor="#E6F0FF" padding="medium">
        <TextWrapper>
          <Text type="h2" color="#0047B4">
            Description
          </Text>
        </TextWrapper>

        <TextWrapper>
          <Text type="p" color="#0047B4" style={{ padding: '0 60px' }}>
            {current.description}
          </Text>
        </TextWrapper>
      </Section>

      <Section backgroundColor="#E6F0FF" padding="medium">
        <TextWrapper>
          <Text type="h2" color="#0047B4">
            Technologies
          </Text>
        </TextWrapper>
        <TextWrapper>
          <Text
            type="p"
            color="#0047B4"
            style={{ padding: '0 60px', marginTop: 15 }}
          >
            {current.skills}
          </Text>
        </TextWrapper>
      </Section>

      <Section backgroundColor="#E6F0FF" padding="medium">
        <TextWrapper>
          <Text type="h2" color="#0047B4">
            What happened?
          </Text>
        </TextWrapper>
        <TextWrapper>
          <Text
            type="p"
            color="#0047B4"
            style={{ padding: '0 60px', marginTop: 15 }}
          >
            {current.reason}
          </Text>
        </TextWrapper>
      </Section>

      <Section
        padding="none"
        backgroundColor="#0047B4"
        style={{ paddingLeft: 0 }}
      >
        <BackgroundImage
          image={Sitting}
          width="30%"
          height={400}
          backgroundPosition="center center"
          backgroundSize="cover"
        ></BackgroundImage>
        <Text
          type="h2"
          color="white"
          style={{ paddingTop: 50, paddingLeft: 50, width: '70%' }}
        >
          That's me sitting on a cushin. I don't have any project pictures since
          they really care about NDAs.
        </Text>
      </Section>

      <Section
        padding="medium"
        backgroundColor="#43CEA2"
        style={{ justifyContent: 'center', textAlign: 'center' }}
      >
        <div>
          <Text type="h1" color="#292929">
            Thanks for reading!
          </Text>
          <Text
            type="h5"
            color="#ffffff"
            style={{
              marginTop: 60,
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: '#0047B4',
              padding: '20px 40px',
              display: 'inline-block',
            }}
            className="is-clickable"
          >
            <Link
              className="is-clickable"
              to="/"
              style={{ color: 'white', textDecoration: 'none', cursor: 'none' }}
            >
              <GoArrowLeft
                style={{
                  verticalAlign: 'middle',
                  fontSize: '2rem',
                }}
              />{' '}
              Back home
            </Link>
          </Text>
        </div>
      </Section>
    </Layout>
  );
};

export default Project;
