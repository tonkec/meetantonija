import { P } from '../../styles/typography';
import { StyledSection } from './Section.styles';

interface SectionInterface {
  text?: string;
  backgroundColor: string;
  justifyContent: 'flex-start' | 'center' | 'flex-end';
  textMaxWidth?: number;
}

const Section = ({
  text,
  backgroundColor,
  justifyContent,
  textMaxWidth,
}: SectionInterface) => {
  return (
    <StyledSection
      backgroundColor={backgroundColor}
      paddingX={100}
      paddingY={200}
      style={{
        flex: 1,
        width: '100%',
        justifyContent: justifyContent,
        display: 'flex',
      }}
    >
      {text && (
        <P
          style={{ maxWidth: textMaxWidth ? textMaxWidth : 'auto' }}
          color="#000000"
        >
          {text}
        </P>
      )}
    </StyledSection>
  );
};

export default Section;
