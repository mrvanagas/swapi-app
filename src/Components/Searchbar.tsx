import { TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getSeachResults } from '../Api/api';
import { minCharacters } from '../utils/constants';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    let timerID: any

    if (inputValue.length > minCharacters) {
      timerID = setTimeout(async () => {
        try {
          const results = await getSeachResults(inputValue)
          setSearchResults(results)
        } catch (err) {
          alert(err)
        }
      }, 1000)
    }
    return () => {
      clearTimeout(timerID)
    }
  }, [inputValue])

  const searchValueHandler = value => {
    setInputValue(value)
  }

  return (
    <>
      <Typography>Search Characters</Typography>
      <TextField id="outlined-basic" fullWidth value={inputValue} onChange={event => searchValueHandler(event.target.value)}/>
      <Dropdown>
        {inputValue.length > minCharacters ? (
          <DropdownRow>
            {searchResults.map(result => (
              <div key={result.id}>
                <Link to={`/character/${result.id}`}><span>{`${result.name}`}</span></Link>
              </div>
            ))}
          </DropdownRow>
        ) : null}
      </Dropdown>
    </>
  );
};

const Dropdown = styled.div`
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  &:empty {
    border: none;
  }
`;
const DropdownRow = styled.div`
  cursor: pointer;
  text-align: start;
  margin: 2px 0;
`;

export default Searchbar;
