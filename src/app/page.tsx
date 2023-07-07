import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Sqaures from './components/Squares/Squares';

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2">
        <div>
          <Header />
        </div>
        <div>
          <Sqaures numberOfSquares={4} containerSize={2} />
          <Section
            backgroundColor="#FFE8D1"
            text="...a freelance front end developer with high React skills..."
            textAlign="left"
          />
        </div>
      </div>

      <Section
        backgroundColor="#FFE8D1"
        text="...but I also coded some apps using React Native and Angular..."
        textAlign="left"
      />

      <Sqaures
        numberOfSquares={4}
        containerSize={1}
        titles={['Trustworthy', 'Casumo', 'Formunauts', 'Craftstrom']}
      />

      <Section
        backgroundColor="#FFE8D1"
        text="...this means that I am skilled in Javascript, Typescript and Styled Components..."
        textAlign="right"
      />
    </main>
  );
}
