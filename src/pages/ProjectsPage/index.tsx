import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Text from 'components/Text/Text';
import Section from 'components/Section/Section';
import AnimateIn from 'components/AnimateIn/AnimateIn';
import { ProjectCard } from 'pages/Homepage/Homepage.styles';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import data from 'data/projects.json';
import ContactMe from 'components/ContactMe/ContactMe';

const ProjectsPage = () => {
  const nonFeaturedProjects = data.projects.filter(
    (project) => !project.isFeatured
  );
  return (
    <Layout>
      <Header backgroundColor="#f5f5f5">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <Text type="h1" color="#292929">
              More of my projects.
            </Text>
          </div>
        </div>
      </Header>

      <Section backgroundColor="#f5f5f5" padding="medium">
        <AnimateIn>
          <div className="row">
            {nonFeaturedProjects.map((project) => (
              <div className="col-xs-12 col-md-6">
                <ProjectCard>
                  <div>
                    <Text type="h3" color="#292929">
                      {project.title}
                    </Text>
                    <Link
                      to={`/project/${project.title}`}
                      className="is-clickable"
                      style={{ textDecoration: 'none' }}
                    >
                      <Text type="p" color="#292929" className="definition">
                        {project.headline}{' '}
                        <GoArrowRight
                          style={{
                            fontSize: '1rem',
                            verticalAlign: 'middle',
                          }}
                        />
                      </Text>
                    </Link>
                  </div>
                </ProjectCard>
              </div>
            ))}
          </div>
        </AnimateIn>
      </Section>

      <ContactMe backgroundColor="#43cea2" />
    </Layout>
  );
};

export default ProjectsPage;
