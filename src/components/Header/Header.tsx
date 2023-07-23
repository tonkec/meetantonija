import Text from 'components/Text';
import { StyledHeader } from './Header.styles';
import { MainContainer } from 'styles/containers';
const Header = ({
  children,
  backgroundColor,
  linearGradient,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  linearGradient?: string[];
}) => {
  return (
    <StyledHeader
      backgroundColor={backgroundColor}
      linearGradient={linearGradient}
    >
      <MainContainer>{children}</MainContainer>
    </StyledHeader>
  );
};

export default Header;
