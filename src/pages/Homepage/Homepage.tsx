import Header from '../../components/Header/Header';
import Sqaures from '../../components/Squares/Squares';
import Section from '../../components/Section/Section';
import { FlexContainer, GridContainer } from '../../styles/containers';
import CtaSection from '../../components/CtaSection/CtaSection';
import Dots from '../../components/Dots';
import data from './../../data/projects.json';

const Homepage = () => {
  const titles = data.projects.map((project) => project.title);
  return (
    <main>
      <GridContainer>
        <div>
          <Header>
            Hi, <br /> I am Antonija
            <Dots />
          </Header>
        </div>
        <FlexContainer align="flex-start" style={{ flexDirection: 'column' }}>
          <Sqaures numberOfSquares={4} containerSize={2} wrap={false} />
          <Section
            backgroundColor="#f5f5f5"
            text="...a freelance front end developer who hid many secrets on this page using super strong React skills..."
            justifyContent="flex-start"
            hasPattern
            patternColors={['#ff944e', '#f5f5f5']}
          />
        </FlexContainer>
      </GridContainer>

      <Section
        backgroundColor="#f5f5f5"
        text="...but I also coded some apps using React Native and Angular..."
        justifyContent="flex-start"
        textMaxWidth={400}
        hasPattern
        patternColors={['#ff944e', '#f5f5f5']}
      />

      <Sqaures numberOfSquares={4} containerSize={2} titles={titles} wrap />

      <Section
        backgroundColor="#f5f5f5"
        text="...this means that I am skilled in Javascript, Typescript and Styled Components..."
        justifyContent="flex-end"
        textMaxWidth={400}
      />

      <CtaSection />
    </main>
  );
};
export default Homepage;
