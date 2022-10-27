import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Link } from 'react-router-dom';
import { headCellStyles, rowCellStyles } from '../utils/stylings';
import HomePagination from './HomePagination';

interface CharacterTableProps {
  charactersList: any,
  page: number,
  setPage: any
}

const CharacterTable = ({ charactersList, setPage }: CharacterTableProps): JSX.Element => {

  return (
    <TableContainer>
      <Table>
        <TableHead >
          <TableRow >
            <TableCell {...headCellStyles}>Name</TableCell>
            <TableCell {...headCellStyles}>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {charactersList.map((character: any) => (
            <TableRow {...rowCellStyles} key={character.name}>
              <TableCell  >{character.name}</TableCell>
              <TableCell id={character.id}>
                  <Link to={`/character/${character.id}`}>More details</Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <HomePagination setPage={setPage} />
    </TableContainer>
  );
};

export default CharacterTable;
