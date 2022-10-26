import { TextField, Typography } from '@mui/material';
import { getSeachResults } from '../Api/api';
import { minCharacters } from '../utils/constants';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface SearchBarProps {
  setCharacterList: Dispatch<SetStateAction<any[]>>;
}

const SearchBar = ({ setCharacterList }: SearchBarProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let timerID: any;

    if (inputValue.length > minCharacters) {
      timerID = setTimeout(async () => {
        try {
          const results: any[] = await getSeachResults(inputValue);
          setCharacterList(results);
        } catch (err) {
          alert(err);
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timerID);
    };
  }, [inputValue, setCharacterList]);

  const searchValueHandler = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <Typography>Search Characters</Typography>
      <TextField
        id="outlined-basic"
        fullWidth
        value={inputValue}
        onChange={(event) => searchValueHandler(event.target.value)}
      />
    </>
  );
};
export default SearchBar;
