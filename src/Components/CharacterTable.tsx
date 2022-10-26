import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../Api/api';

const CharacterTable = () => {
  const [charData, setCharData] = useState<any | null>([]);

  useEffect(() => {
    getCharacters().then(setCharData)
  }, [])

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
    </TableContainer>
  );
};

export default CharacterTable;
