import { IconWrapper } from './NextObject.styles';
import { GrNext } from 'react-icons/gr';
import Section from 'components/Section';
import AnimateIn from 'components/AnimateIn';
import { useNavigate } from 'react-router';
import Text from 'components/Text/Text';
import { NotesType, ProjectType } from 'components/Search/Search';

const NextObject = ({ item }: { item: ProjectType | NotesType }) => {
  const navigate = useNavigate();
  const navigateToNextItem = (item: ProjectType | NotesType) => {
    if (item.objectType === 'note') {
      navigate(`/notes/${item.id}`);
    }

    if (item.objectType === 'project') {
      navigate(`/project/${item.title.toLowerCase()}`);
    }
  };

  return (
    <Section backgroundColor="#00136E" padding="none">
      <AnimateIn>
        <div
          className="row is-clickable"
          onClick={() => navigateToNextItem(item)}
        >
          <div
            className="col-xs-8 col-sm-8 col-md-6 col-md-offset-4"
            style={{
              paddingTop: 80,
              paddingBottom: 80,
              textAlign: 'right',
              paddingRight: 0,
            }}
          >
            <Text type="h2" color="#f5f5f5">
              Read next
            </Text>
            <Text type="p" color="#f5f5f5">
              {item.title}
            </Text>
          </div>
          <div
            className="col-xs-4 col-sm-4 col-md-2"
            style={{
              backgroundColor: '#00136Ecc',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 80,
              paddingBottom: 80,
            }}
          >
            <IconWrapper>
              <GrNext fontSize={'3rem'} />
            </IconWrapper>
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
};

export default NextObject;
