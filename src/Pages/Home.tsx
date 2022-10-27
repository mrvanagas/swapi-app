import { Container } from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';
import { getCharacters } from '../Api/api';
import CharacterTable from '../Components/CharacterTable';
import Spinner from '../Components/LoadingSpinner';
import SearchBar from '../Components/SearchBar';

const Home = (): JSX.Element => {
  const [searchResults, setCharacterList] = useState<SetStateAction<any[]>>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getCharacters(page).then(setCharacterList);
  }, [page]);

  return (
    <Container>
      <SearchBar setCharacterList={setCharacterList} />
      { searchResults.length !== 0 ? (
        <CharacterTable
        charactersList={searchResults}
        page={page}
        setPage={setPage}
        />
        ) : (
          <Spinner />
        )
      }
    </Container>
  );
};

export default Home;
