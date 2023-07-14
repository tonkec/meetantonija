import { SearchWrapper } from './Search.styles';
import Text from 'components/Text';
import { FaSearch } from 'react-icons/fa';

const Search = ({ show }: { show: boolean }) => {
  return (
    <SearchWrapper show={show}>
      <form>
        {' '}
        <Text type="h1" color="white" style={{ marginBottom: 30 }}>
          What are you looking for?
        </Text>
        <div>
          <input type="text" placeholder="Try with a project name..." />
          <FaSearch className="icon" />
        </div>
      </form>
    </SearchWrapper>
  );
};

export default Search;
