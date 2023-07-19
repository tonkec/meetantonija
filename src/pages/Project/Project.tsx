import { useRef, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import data from 'data/projects.json';
import Layout from 'components/Layout/Layout';
import Text from 'components/Text/Text';
import Section from 'components/Section/Section';
import { FlexContainer, FlexItem } from 'styles/containers';
import { GoArrowLeft } from 'react-icons/go';
import Sitting from 'images/sitting.jpeg';
import useImage from 'hooks/useImage';
import { NextProjectButton, Pattern } from './Project.styles';
import { GoArrowRight } from 'react-icons/go';
import { ProjectType } from 'components/Search/Search';
import { ColorRing } from 'react-loader-spinner';
const Project = () => {
  const nextProjectBox = useRef<HTMLDivElement>(null);
  const patternBox = useRef<HTMLDivElement>(null);
  const loading = useImage(Sitting);
  const navigate = useNavigate();
  const routeParams = useParams();
  const { id } = routeParams;
  const current = data.projects.filter(
    (project) => project.title.toLowerCase() === id?.toLowerCase()
  )[0];
  const nextTwoProjects = data.projects
    .filter((project) => project !== current)
    .sort(() => 0.5 - Math.random());

  const navigateToNextProject = (project: ProjectType) => {
    navigate(`/project/${project.title.toLowerCase()}`);
  };

  useEffect(() => {
    setTimeout(() => {
      const projectHeight =
        nextProjectBox?.current?.getBoundingClientRect().height;
      patternBox?.current?.setAttribute('style', `height: ${projectHeight}px`);
    }, 0);
  }, []);

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
      </Section>

      <Section backgroundColor="#E6F0FF" padding="medium">
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
      </Section>

      <Section backgroundColor="#E6F0FF" padding="medium">
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
      </Section>

      <Section padding="medium" backgroundColor="#0047B4">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            {loading ? (
              <div
                style={{
                  position: 'relative',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    '#43cea2',
                    '#43cea2',
                    '#43cea2',
                    '#43cea2',
                    '#43cea2',
                  ]}
                />
              </div>
            ) : (
              <img src={Sitting} alt="Me sitting" width="100%" />
            )}
          </div>
          <div className="col-xs-12 col-md-7 col-md-offset-1">
            <Text type="h2" color="white">
              That's me sitting on a cushion. I don't have any project pictures
              since clients really care about NDAs.
            </Text>
          </div>
        </div>
      </Section>

      <Section backgroundColor="#E6F0FF" padding="none">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <Pattern>
              <NextProjectButton
                background="#292929"
                onClick={() => navigateToNextProject(nextTwoProjects[0])}
              >
                <button>
                  {nextTwoProjects[0].title}{' '}
                  <GoArrowRight style={{ verticalAlign: 'middle' }} />
                </button>
              </NextProjectButton>
            </Pattern>
          </div>
        </div>
      </Section>

      <Section
        padding="medium"
        backgroundColor="#43cea2"
        style={{
          textAlign: 'center',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
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
