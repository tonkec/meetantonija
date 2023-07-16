import Text from 'components/Text';
import { StyledHeader } from './Header.styles';
import { MainContainer } from 'styles/containers';
const Header = ({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) => {
  return (
    <StyledHeader backgroundColor={backgroundColor}>
      <MainContainer>
        <Text type="h1" color="#fff">
          {children}
        </Text>
      </MainContainer>
    </StyledHeader>
  );
};

export default Header;
