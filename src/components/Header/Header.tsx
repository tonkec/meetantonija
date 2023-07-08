import Dots from '../Dots';
import Sqaures from '../Squares/Squares';
import Text from '../Text';
import { StyledHeader } from './Header.styles';
const Header = () => {
  return (
    <StyledHeader>
      <Text type="h1" color="#fff">
        Hi, <br /> I am Antonija
        <Dots />
      </Text>
    </StyledHeader>
  );
};

export default Header;
