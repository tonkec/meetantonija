import Header from '../../components/Header/Header';
import Sqaures from '../../components/Squares/Squares';
import Section from '../../components/Section/Section';
import { FlexContainer, GridContainer } from '../../styles/containers';

const Homepage = () => (
  <main>
    <GridContainer>
      <div>
        <Header />
      </div>
      <FlexContainer align="flex-start" style={{ flexDirection: 'column' }}>
        <Sqaures numberOfSquares={4} containerSize={2} wrap={false} />
        <Section
          backgroundColor="#f5f5f5"
          text="...a freelance front end developer with high React skills..."
          justifyContent="flex-start"
        />
      </FlexContainer>
    </GridContainer>

    <Section
      backgroundColor="#f5f5f5"
      text="...but I also coded some apps using React Native and Angular..."
      justifyContent="flex-start"
      textMaxWidth={400}
    />

    <Sqaures
      numberOfSquares={4}
      containerSize={2}
      titles={['Trustworthy', 'Casumo', 'Formunauts', 'Craftstrom']}
      wrap
    />

    <Section
      backgroundColor="#f5f5f5"
      text="...this means that I am skilled in Javascript, Typescript and Styled Components..."
      justifyContent="flex-end"
      textMaxWidth={400}
    />
  </main>
);

export default Homepage;
