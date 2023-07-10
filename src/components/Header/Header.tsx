import Text from 'components/Text';
import { StyledHeader } from './Header.styles';
const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledHeader>
      <Text type="h1" color="#fff">
        {children}
      </Text>
    </StyledHeader>
  );
};

export default Header;
