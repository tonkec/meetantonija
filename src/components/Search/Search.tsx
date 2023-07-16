import { SearchWrapper, SearchResults } from './Search.styles';
import Text from 'components/Text';
import { SyntheticEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import data from 'data/projects.json';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StateInterface, setShowSearch } from 'store/slices/CounterSlice';

export interface ProjectType {
  title: string;
  description: string;
  skills: string;
  headline: string;
  link: string;
  reason: string;
  year: number;
}

const Search = () => {
  const dispatch = useDispatch();
  const showSearch = useSelector(
    (state: StateInterface) => state.counterSlice.showSearch
  );

  const [value, setValue] = useState('');
  const [results, setResults] = useState<ProjectType[]>([]);

  const onInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);

    const results = data.projects.filter((project) =>
      project.title.toLowerCase().includes(target.value)
    );

    setResults(results);
  };
  return (
    <SearchWrapper show={showSearch}>
      <form>
        <Text type="h1" color="white" style={{ marginBottom: 30 }}>
          Search projects quickly!
        </Text>
        <div>
          <input
            type="text"
            placeholder="Project name..."
            onChange={onInputChange}
            value={value}
          />
          <FaSearch className="icon" />
        </div>
      </form>

      <SearchResults>
        {results.length > 0 &&
          results.map((result) => (
            <Link
              to={`/project/${result.title.toLowerCase()}`}
              onClick={() => dispatch(setShowSearch(false))}
            >
              {result.title}
            </Link>
          ))}
      </SearchResults>
    </SearchWrapper>
  );
};

export default Search;
