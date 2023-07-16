import { StyledSection } from './Section.styles';
import { MainContainer } from 'styles/containers';

interface SectionInterface {
  children: React.ReactNode;
  backgroundColor: string;
  padding: 'small' | 'medium' | 'big' | 'none';
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
      <MainContainer>{children}</MainContainer>
    </StyledSection>
  );
};

export default Section;
