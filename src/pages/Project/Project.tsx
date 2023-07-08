import { useParams } from 'react-router-dom';
import { FlexContainer } from '../../styles/containers';
import Sqaures from '../../components/Squares';
import Section from '../../components/Section';
import { GridContainer } from '../../styles/containers';
import Header from '../../components/Header/Header';
const Project = () => {
  const routeParams = useParams();
  return (
    <GridContainer>
      <Header>Revuto</Header>
      <FlexContainer align="flex-start" style={{ flexDirection: 'column' }}>
        <Sqaures numberOfSquares={4} containerSize={2} wrap={false} />
        <Section
          backgroundColor="#f5f5f5"
          text="...a simple way to manage your subscriptions while collecting tokens..."
          justifyContent="flex-start"
          hasPattern
          patternColors={['#005246', '#f5f5f5']}
        />
      </FlexContainer>
    </GridContainer>
  );
};

export default Project;
