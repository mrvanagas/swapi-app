import { TableCell, TableRow } from '@mui/material';
import { rowCellStyles } from '../utils/stylings';
import { CHARACTER_DESC_PROPERTIES } from '../utils/constants';

interface CharacterCellsProps {
  character: any;
}

const CharacterRow = ({ character }: CharacterCellsProps): JSX.Element => {
  return (
    <TableRow>
      {CHARACTER_DESC_PROPERTIES.map((prop: any) => (
        <TableCell key={prop.name}{...rowCellStyles}>{character[prop.name]}</TableCell>
      ))}
    </TableRow>
  );
};

export default CharacterRow;
