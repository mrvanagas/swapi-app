import { TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const Searchbar = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Typography>Search</Typography>
      <TextField id="outlined-basic" fullWidth />
    </>
  );
};

export default Searchbar;
