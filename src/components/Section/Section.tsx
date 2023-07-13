import { P } from 'styles/typography';
import { StyledSection } from './Section.styles';

interface SectionInterface {
  children: React.ReactNode;
  backgroundColor: string;
  padding: 'small' | 'medium' | 'big';
  style?: React.CSSProperties;
}

const Section = ({
  children,
  backgroundColor,
  padding,
  style,
}: SectionInterface) => {
  return (
    <StyledSection
      style={style}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
