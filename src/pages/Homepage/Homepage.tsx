import { useState } from 'react';
import Header from 'components/Header';
import Section from 'components/Section';
import { FlexContainer } from 'styles/containers';
import CtaSection from 'components/CtaSection';
import Dots from 'components/Dots';
import data from 'data/projects.json';
import Layout from 'components/Layout';
import { GoArrowRight } from 'react-icons/go';
import Text from 'components/Text/Text';
import Me from 'images/ja.jpeg';
import Contact from 'images/contact.jpeg';
import { H2, P } from 'styles/typography';
import { Carousel } from '@trendyol-js/react-carousel';
import {
  AbsoluteDiv,
  BackgroundImage,
  ProjectCard,
  CarouselItem,
  ButtonCopy,
  TestimonialCard,
} from './Homepage.styles';
import { CarouselItems } from './CarouselItems';
import Accordion from 'components/Accordion/Accordion';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [copyMsg, setCopyMsg] = useState('Copy email');
  return (
    <Layout>
      <main>
        <FlexContainer align="flex-start">
          <Header>
            Hello world, I am Antonija, a frontend developer who can change any
            background color
            <Dots />
          </Header>
        </FlexContainer>

        <Section
          backgroundColor="#f5f5f5"
          padding="big"
          style={{ paddingBottom: '10vh' }}
        >
          <AbsoluteDiv>
            <Text type="p" color="#E6F0FF">
              ...I once centered a div vertically and horizontally without
              anyone's help or stack overflow...
            </Text>
          </AbsoluteDiv>

          <BackgroundImage
            image={Me}
            width="400px"
            height={400}
            backgroundPosition="center center"
            backgroundSize="cover"
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                right: '-100%',
                height: '100%',
                width: '100%',
                backgroundColor: '#43cea2',
                padding: '50px 40px',
              }}
            >
              <Text type="p" color="#292929" style={{ fontStyle: 'italic' }}>
                "Let's pretend I said here something smart. Also, that's me in
                the corner... that's me in the spotlight."
              </Text>

              <Text type="p" color="#292929" style={{ marginTop: 20 }}>
                - Antonija Šimić
              </Text>
            </div>
          </BackgroundImage>
        </Section>

        <Section
          backgroundColor="#f5f5f5"
          padding="small"
          style={{ flexWrap: 'wrap' }}
        >
          <div>
            <Text type="h2" color="#292929" style={{ marginBottom: 50 }}>
              Some cool projects I worked on
            </Text>
          </div>
          <FlexContainer
            align="flex-start"
            wrap={false}
            style={{ width: '100%' }}
          >
            {data.projects.slice(0, 2).map((project) => (
              <ProjectCard>
                <div>
                  <Text type="h3" color="#292929">
                    {project.title}
                  </Text>
                  <Link
                    to={`project/${project.title}`}
                    className="is-clickable"
                    style={{ textDecoration: 'none' }}
                  >
                    <Text type="p" color="#292929" className="definition">
                      {project.headline}{' '}
                      <GoArrowRight
                        style={{ fontSize: '1rem', verticalAlign: 'middle' }}
                      />
                    </Text>
                  </Link>
                </div>
              </ProjectCard>
            ))}
          </FlexContainer>
        </Section>

        <Section backgroundColor="#f5f5f5" padding="small">
          <FlexContainer
            align="flex-start"
            wrap={false}
            style={{ width: '100%' }}
          >
            {data.projects.slice(2, 4).map((project) => (
              <ProjectCard>
                <div>
                  <Text type="h3" color="#292929">
                    {project.title}
                  </Text>
                  <Link
                    to={`project/${project.title}`}
                    className="is-clickable"
                    style={{ textDecoration: 'none' }}
                  >
                    <Text type="p" color="#292929" className="definition">
                      {project.headline}{' '}
                      <GoArrowRight
                        style={{ fontSize: '1rem', verticalAlign: 'middle' }}
                      />
                    </Text>
                  </Link>
                </div>
              </ProjectCard>
            ))}
          </FlexContainer>
        </Section>

        <Section
          backgroundColor="#f5f5f5"
          padding="medium"
          style={{ flexWrap: 'wrap' }}
        >
          <div>
            <Text type="h2" color="#292929" style={{ marginBottom: 50 }}>
              Here are my superpowers
            </Text>
          </div>
          <Carousel show={3.5} slide={2} swiping={true} infinite={false}>
            {CarouselItems.map((item) => (
              <CarouselItem>
                <Text type="h3" color="#292929" style={{ marginBottom: 20 }}>
                  {item.title}
                  {item.icon()}
                </Text>
                <Text type="p" color="#292929" style={{ fontSize: '95%' }}>
                  {item.description}
                </Text>
              </CarouselItem>
            ))}
          </Carousel>
        </Section>

        <Section
          backgroundColor="#f5f5f5"
          padding="medium"
          style={{
            paddingRight: 0,
            justifyContent: 'space-between',
          }}
        >
          <Text type="h2" color="#292929">
            The most common <br />
            questions about me
          </Text>
          <Accordion
            items={[
              {
                title: 'Are you a senior or medior?',
                description:
                  'I am closer to being senior than medior even though I do not yet have the confidence to say that I am senior out loud.',
              },
              {
                title: 'What is your availability?',
                description:
                  'I can start working in the beginning of the August.',
              },
              {
                title: 'How long have you been coding?',
                description: 'I have been coding for the past 10 years.',
              },
            ]}
          />
        </Section>

        <Section
          padding="small"
          backgroundColor="#E6F0FF"
          style={{
            flexWrap: 'wrap',
            flexDirection: 'column',
          }}
        >
          <Text type="h2" color="#292929" style={{ marginBottom: 50 }}>
            People said some nice <br />
            things about me
          </Text>

          <FlexContainer
            align="flex-start"
            wrap={true}
            style={{ justifyContent: 'flex-start', alignItems: 'normal' }}
          >
            <TestimonialCard>
              <div
                style={{ backgroundColor: '#f5f5f5', padding: 20, height: 150 }}
              >
                <Text type="p" color="#292929">
                  She sometimes cleans her room. <br />
                  <span style={{ fontSize: '80%', paddingRight: 10 }}>Mom</span>
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiOutlineStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiOutlineStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                </Text>
              </div>
            </TestimonialCard>

            <TestimonialCard>
              <div
                style={{ backgroundColor: '#f5f5f5', padding: 20, height: 150 }}
              >
                <Text type="p" color="#292929">
                  She can count to 100. <br />
                  <span style={{ fontSize: '80%', paddingRight: 10 }}>
                    Client
                  </span>
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                </Text>
              </div>
            </TestimonialCard>

            <TestimonialCard>
              <div
                style={{ backgroundColor: '#f5f5f5', padding: 20, height: 150 }}
              >
                <Text type="p" color="#292929">
                  She always comes full when I cook. <br />
                  <span style={{ fontSize: '80%', paddingRight: 10 }}>
                    Grandmother
                  </span>{' '}
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiOutlineStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiOutlineStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiOutlineStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiOutlineStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                </Text>
              </div>
            </TestimonialCard>

            <TestimonialCard>
              <div
                style={{ backgroundColor: '#f5f5f5', padding: 20, height: 150 }}
              >
                <Text type="p" color="#292929">
                  She definitevly knows what a div is. <br />
                  <span style={{ fontSize: '80%', paddingRight: 10 }}>
                    Client
                  </span>{' '}
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <AiFillStar
                    fontSize={'80%'}
                    style={{ verticalAlign: 'middle' }}
                  />
                </Text>
              </div>
            </TestimonialCard>
          </FlexContainer>
        </Section>

        <Section
          backgroundColor="#43cea2"
          padding="small"
          style={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
        >
          <BackgroundImage
            image={Contact}
            backgroundPosition="top left"
            backgroundSize="contain"
            height={300}
            width="40%"
          />
          <div
            style={{
              width: '60%',
              padding: '50px 0px',
            }}
          >
            <Text type="h3" color="#292929">
              Do you have a project for me?
            </Text>

            <ButtonCopy
              content={copyMsg}
              onClick={() => {
                setCopyMsg('Copied!');
                setTimeout(() => {
                  setCopyMsg('Copy email');
                }, 1000);
                navigator.clipboard.writeText('antonija1023@gmail.com');
              }}
            >
              <span>Email me</span>
            </ButtonCopy>
          </div>
        </Section>

        <section
          style={{
            backgroundColor: '#0047b4',
            paddingTop: '20vh',
            paddingBottom: '10vh',
            paddingLeft: 50,
          }}
        >
          <H2 style={{ color: 'white', textAlign: 'left' }}>
            Wait... it's not over yet...
          </H2>

          <P
            style={{
              color: 'white',
              textAlign: 'left',
              marginTop: 30,
              lineHeight: 1.6,
            }}
          >
            Are you ready for some treasure hunt? You see many recruiters want
            my CV, but I never know what they do with it afterwards. So this is
            how we are going to play. I hid some secret boxes on this website
            and if you want my CV, you will have to collect them all. That means
            there is an input field waiting for a secret word that will open up
            my CV.
          </P>
        </section>

        <CtaSection />
      </main>
    </Layout>
  );
};
export default Homepage;
