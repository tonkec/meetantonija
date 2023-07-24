import Section from 'components/Section';
import AnimateIn from 'components/AnimateIn';
import Text from 'components/Text';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';

const GoHome = ({ heading }: { heading: string }) => (
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
    <AnimateIn>
      <div>
        <Text type="h1" color="#292929">
          {heading}
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
            style={{
              color: 'white',
              textDecoration: 'none',
              cursor: 'none',
            }}
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
    </AnimateIn>
  </Section>
);

export default GoHome;
