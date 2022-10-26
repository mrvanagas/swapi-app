import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomePagination from './HomePagination';

interface CharacterTableProps {
  charactersList: any,
  page: number,
  setPage
}

const CharacterTable = ({ charactersList, setPage }: CharacterTableProps) => {

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
          {charactersList.map((character: any) => (
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
