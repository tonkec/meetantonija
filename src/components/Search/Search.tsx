import { SearchWrapper, SearchResults } from './Search.styles';
import Text from 'components/Text';
import { SyntheticEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import data from 'data/projects.json';
import { notes } from 'pages/NotesPage/notes/notes';
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
  objectType: string;
}

export interface NotesType {
  title: string;
  subtitle: string;
  id: string;
  icon: () => void;
  objectType: string;
}

const Search = () => {
  const dispatch = useDispatch();
  const showSearch = useSelector(
    (state: StateInterface) => state.counterSlice.showSearch
  );

  const [value, setValue] = useState('');
  const [results, setResults] = useState<any>([]);

  const onInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value.trim() === '') {
      setValue(target.value);
      setResults([]);
      return;
    }

    setValue(target.value);

    const resultsProjects = data.projects.filter((project) =>
      project.title.toLowerCase().includes(target.value)
    );

    const resultsNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(target.value)
    );

    const result = [...resultsProjects, ...resultsNotes];

    setResults(result);
  };
  return (
    <SearchWrapper show={showSearch}>
      <form>
        <Text type="h2" color="white" style={{ marginBottom: 30 }}>
          Search projects and notes!
        </Text>
        <div>
          <input
            type="text"
            placeholder="Type here..."
            onChange={onInputChange}
            value={value}
          />
          <FaSearch className="icon" />
        </div>
      </form>

      <SearchResults>
        {results.length > 0 &&
          results.map((result: any) =>
            result.objectType === 'project' ? (
              <Link
                to={`/project/${result.title.toLowerCase()}`}
                onClick={() => dispatch(setShowSearch(false))}
                key={result.title.toLowerCase()}
              >
                {result.title}
              </Link>
            ) : (
              <Link
                to={`/notes/${result.id}`}
                onClick={() => dispatch(setShowSearch(false))}
                key={result.id}
              >
                {result.title}
              </Link>
            )
          )}
      </SearchResults>
    </SearchWrapper>
  );
};

export default Search;
