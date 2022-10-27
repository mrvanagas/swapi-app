import { TableRow, TableCell } from '@mui/material';
import { CHARACTER_DESC_PROPERTIES } from '../utils/constants';
import { headCellStyles } from '../utils/stylings';

const CharacterTableHeader = () => {
  return (
    <TableRow>
      {CHARACTER_DESC_PROPERTIES.map((headerProps) => (
        <TableCell {...headCellStyles} key={headerProps.title}>
          {headerProps.title}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default CharacterTableHeader;
