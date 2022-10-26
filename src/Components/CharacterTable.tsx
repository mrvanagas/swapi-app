import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../Api/api';
import HomePagination from './HomePagination';

const CharacterTable = () => {
  const [charData, setCharData] = useState<any | null>([]);
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    getCharacters(page).then(setCharData)
  }, [page])

  console.log(charData)

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {charData.map((character: any) => (
            <TableRow key={character.name}>
              <TableCell>{character.name}</TableCell>
              <TableCell id={character.id}>
                  <Link to={`/character/${character.id}`}>More details</Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <HomePagination setPage={setPage}/>
    </TableContainer>
  );
};

export default CharacterTable;
