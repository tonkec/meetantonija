import { useParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import data from 'data/projects.json';
import CtaSection from 'components/CtaSection/CtaSection';
import Layout from 'components/Layout/Layout';
import { TitleLink } from './Project.styles';

const Project = () => {
  const routeParams = useParams();
  const { id } = routeParams;
  const current = data.projects.filter(
    (project) => project.title.toLowerCase() === id?.toLowerCase()
  )[0];
  return (
    <Layout>
      <Header>
        <TitleLink href={current.link} target="_blank">
          {current.title}
        </TitleLink>
      </Header>

      {/* <Section
        backgroundColor="#f5f5f5"
        text={current.skills}
        justifyContent="flex-start"
        hasPattern
        patternColors={['#005246', '#f5f5f5']}
        textMaxWidth={400}
      ></Section> */}

      {/* <Section
        backgroundColor="#f5f5f5"
        text={current.description}
        justifyContent="center"
        textMaxWidth={800}
      ></Section> */}
      <CtaSection />
    </Layout>
  );
};

export default Project;
