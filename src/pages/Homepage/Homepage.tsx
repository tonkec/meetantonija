import { useState } from 'react';
import Header from 'components/Header';
import Section from 'components/Section';
import CtaSection from 'components/CtaSection';
import Dots from 'components/Dots';
import data from 'data/projects.json';
import Layout from 'components/Layout';
import { GoArrowRight } from 'react-icons/go';
import Text from 'components/Text/Text';
import Me from 'images/ja.jpeg';
import Contact from 'images/contact.jpeg';
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
import { useKeenSlider } from 'keen-slider/react';
import { useWindowSize } from 'hooks/useWindowSize';
import 'keen-slider/keen-slider.min.css';

const Homepage = () => {
  const size = useWindowSize();
  const [copyMsg, setCopyMsg] = useState('Copy email');
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: size.width > 900 ? 2 : 1,
      spacing: 15,
    },
  });
  return (
    <Layout>
      <main>
        <div className="row">
          <div className="col-xs-12">
            <Header>
              Hello world, I am Antonija, a frontend developer who can change
              any background color
              <Dots />
            </Header>
          </div>
        </div>

        <Section backgroundColor="#f5f5f5" padding="big">
          <AbsoluteDiv>
            <Text type="p" color="#E6F0FF">
              ...I once centered a div vertically and horizontally without
              anyone's help...
            </Text>
          </AbsoluteDiv>
          <BackgroundImage
            image={Me}
            width="400px"
            height={400}
            backgroundPosition="center center"
            backgroundSize="cover"
          >
            <div>
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

        <Section backgroundColor="#f5f5f5" padding="medium">
          <div className="row">
            <div className="col-xs-12">
              <Text type="h2" color="#292929" style={{ marginBottom: 50 }}>
                Some cool projects I worked on
              </Text>
            </div>
          </div>

          <div className="row">
            {data.projects.map((project) => (
              <div className="col-xs-12 col-md-6">
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
              </div>
            ))}
          </div>
        </Section>

        <Section backgroundColor="#f5f5f5" padding="medium">
          <div>
            <Text type="h2" color="#292929" style={{ marginBottom: 50 }}>
              Here are my superpowers
            </Text>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div ref={sliderRef} className="keen-slider">
                {CarouselItems.map((item) => (
                  <div className="keen-slider__slide">
                    <CarouselItem>
                      <Text
                        type="h4"
                        color="#292929"
                        style={{ marginBottom: 20 }}
                      >
                        {item.title}
                        {item.icon()}
                      </Text>
                      <Text
                        type="p"
                        color="#292929"
                        style={{ fontSize: '95%' }}
                      >
                        {item.description}
                      </Text>
                    </CarouselItem>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          backgroundColor="#f5f5f5"
          padding="medium"
          style={{
            paddingRight: 0,
            justifyContent: 'space-between',
          }}
        >
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5">
              <Text type="h2" color="#292929" style={{ marginBottom: 30 }}>
                The most common <br />
                questions about me
              </Text>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-7">
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
            </div>
          </div>
        </Section>

        <Section padding="medium" backgroundColor="#E6F0FF">
          <div className="row">
            <div className="col-xs-12">
              <Text type="h2" color="#292929" style={{ marginBottom: 50 }}>
                People said some nice <br />
                things about me
              </Text>
            </div>

            <div className="col-xs-12 col-sm-8 col-md-6">
              <TestimonialCard>
                <div
                  style={{
                    backgroundColor: '#f5f5f5',
                    padding: 20,
                  }}
                >
                  <Text type="p" color="#292929">
                    She sometimes cleans her room. <br />
                    <span style={{ fontSize: '80%', paddingRight: 10 }}>
                      Mom
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
            </div>

            <div className="col-xs-12 col-sm-8 col-md-6">
              <TestimonialCard>
                <div
                  style={{
                    backgroundColor: '#f5f5f5',
                    padding: 20,
                  }}
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
            </div>

            <div className="col-xs-12 col-sm-8 col-md-6">
              <TestimonialCard>
                <div
                  style={{
                    backgroundColor: '#f5f5f5',
                    padding: 20,
                  }}
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
            </div>

            <div className="col-xs-12 col-sm-8 col-md-6">
              <TestimonialCard>
                <div
                  style={{
                    backgroundColor: '#f5f5f5',
                    padding: 20,
                  }}
                >
                  <Text type="p" color="#292929">
                    She definitely knows what a div is. <br />
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
            </div>
          </div>
        </Section>

        <Section backgroundColor="#43cea2" padding="none">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <BackgroundImage
                image={Contact}
                width="100%"
                height={400}
                backgroundPosition="center center"
                backgroundSize="cover"
                style={{ margin: 0 }}
              ></BackgroundImage>
            </div>

            <div
              className="col-xs-12 col-sm-6 col-lg-8"
              style={{ padding: '50px 40px' }}
            >
              <Text type="h2" color="#292929">
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
          </div>
        </Section>

        <Section
          backgroundColor="#0047b4"
          padding="medium"
          style={{ paddingBottom: 0 }}
        >
          <Text type="h2" color="white" style={{ marginBottom: 30 }}>
            Wait... it's not over yet...
          </Text>

          <Text type="p" color="white">
            Are you ready for some treasure hunt? You see many recruiters want
            my CV, but I never know what they do with it afterwards. So this is
            how we are going to play. I hid some secret boxes on this website
            and if you want my CV, you will have to collect them all. That means
            there is an input field waiting for a secret word that will open up
            my CV.
          </Text>
        </Section>

        <CtaSection />
      </main>
    </Layout>
  );
};
export default Homepage;
