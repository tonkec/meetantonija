import { Link, useParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import data from 'data/projects.json';
import Layout from 'components/Layout';
import Text from 'components/Text';
import Section from 'components/Section';
import { FlexContainer, FlexItem } from 'styles/containers';
import Sitting from 'images/sitting.jpeg';
import useImage from 'hooks/useImage';
import AnimateIn from 'components/AnimateIn';
import GoHome from 'components/GoHome';
import Loader from 'components/Loader';
import NextObject from 'components/NextObject';
import ContactMe from 'components/ContactMe';

const Project = () => {
  const loading = useImage(Sitting);

  const routeParams = useParams();
  const { id } = routeParams;
  const current = data.projects.filter(
    (project) => project.title.toLowerCase() === id?.toLowerCase()
  )[0];
  const nextProject = data.projects
    .filter((project) => project !== current)
    .sort(() => 0.5 - Math.random());

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
          <FlexItem border={true}>
            <Text type="h4" color="white">
              Year
            </Text>
            <Text type="p" color="white" style={{ marginTop: 20 }}>
              {current.year}
            </Text>
          </FlexItem>
          <FlexItem border={true}>
            <Text type="h4" color="white">
              Work
            </Text>
            <Text type="p" color="white" style={{ marginTop: 20 }}>
              Freelance
            </Text>
          </FlexItem>
          <FlexItem border={true}>
            <Text type="h4" color="white">
              Website
            </Text>
            <Link
              to={current.link}
              target="_blank"
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'none',
              }}
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
        <AnimateIn>
          {' '}
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <Text type="h2" color="#0047B4" style={{ marginBottom: 20 }}>
                Description
              </Text>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-8">
              <Text type="p" color="#0047B4">
                {current.description}
              </Text>
            </div>
          </div>
        </AnimateIn>
      </Section>

      <Section backgroundColor="#E6F0FF" padding="medium">
        <AnimateIn>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <Text type="h2" color="#0047B4" style={{ marginBottom: 20 }}>
                Technologies
              </Text>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-8">
              <Text type="p" color="#0047B4">
                {current.skills}
              </Text>
            </div>
          </div>
        </AnimateIn>
      </Section>

      <Section backgroundColor="#E6F0FF" padding="medium">
        <AnimateIn>
          {' '}
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <Text type="h2" color="#0047B4" style={{ marginBottom: 20 }}>
                Why did I stop working with them?
              </Text>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-8">
              <Text type="p" color="#0047B4">
                {current.reason}
              </Text>
            </div>
          </div>
        </AnimateIn>
      </Section>

      <Section padding="medium" backgroundColor="#0047B4">
        <AnimateIn>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              {loading ? (
                <Loader
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              ) : (
                <img src={Sitting} alt="Me sitting" width="100%" />
              )}
            </div>
            <div className="col-xs-12 col-md-7 col-md-offset-1">
              <Text type="h2" color="white">
                That's me sitting on a cushion. I don't have any project
                pictures since clients really care about NDAs.
              </Text>
            </div>
          </div>
        </AnimateIn>
      </Section>

      <GoHome heading="Thanks for reading!" />
      <NextObject item={nextProject[0]} />
      <ContactMe backgroundColor="#E6F0FF" />
    </Layout>
  );
};

export default Project;
