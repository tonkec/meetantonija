import Text from 'components/Text';
import { StyledHeader } from './Header.styles';
const Header = ({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) => {
  return (
    <StyledHeader backgroundColor={backgroundColor}>
      <Text type="h1" color="#fff">
        {children}
      </Text>
    </StyledHeader>
  );
};

export default Header;
