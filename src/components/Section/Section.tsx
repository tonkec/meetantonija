import { P } from '../../styles/typography';
import { StyledSection } from './Section.styles';

interface SectionInterface {
  text?: string;
  backgroundColor: string;
  justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  textMaxWidth?: number;
  hasPattern?: boolean;
  patternColors?: string[];
  children?: React.ReactNode;
  alignItems?: string;
}

const Section = ({
  text,
  backgroundColor,
  justifyContent,
  textMaxWidth,
  hasPattern,
  patternColors,
  children,
  alignItems,
}: SectionInterface) => {
  return (
    <StyledSection
      backgroundColor={backgroundColor}
      hasPattern={hasPattern}
      patternColors={patternColors}
      paddingX={100}
      paddingY={200}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {text && (
        <P
          style={{
            maxWidth: textMaxWidth ? textMaxWidth : 'auto',
            backgroundColor: '#f5f5f5',
            padding: '10px 20px',
          }}
          color="#292929"
        >
          {text}
        </P>
      )}
      {children && children}
    </StyledSection>
  );
};

export default Section;
