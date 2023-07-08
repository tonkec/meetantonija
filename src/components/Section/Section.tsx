import { P } from '../../styles/typography';
import { StyledSection } from './Section.styles';

interface SectionInterface {
  text?: string;
  backgroundColor: string;
  justifyContent: 'flex-start' | 'center' | 'flex-end';
  textMaxWidth?: number;
  hasPattern?: boolean;
  patternColors?: string[];
}

const Section = ({
  text,
  backgroundColor,
  justifyContent,
  textMaxWidth,
  hasPattern,
  patternColors,
}: SectionInterface) => {
  return (
    <StyledSection
      backgroundColor={backgroundColor}
      hasPattern={hasPattern}
      patternColors={patternColors}
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
          style={{
            maxWidth: textMaxWidth ? textMaxWidth : 'auto',
            backgroundColor: '#f5f5f5',
            padding: '10px 20px',
          }}
          color="#000000"
        >
          {text}
        </P>
      )}
    </StyledSection>
  );
};

export default Section;
