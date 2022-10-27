/* eslint-disable react-hooks/exhaustive-deps */
import {
  CardContent,
  Container,
  Table,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter, getCharacterFilms } from '../Api/api';
import FilmList from '../Components/FilmList';
import { headCellStyles, rowCellStyles } from '../utils/stylings';

const headerTitles = [
  'Name',
  'Height',
  'Weight',
  'Hair Color',
  'Eye Color',
  'Skin Color',
  'Birth Date',
  'Gender',
];
const headerList = headerTitles.map((title) => (
  <TableCell {...headCellStyles} key={title}>{title}</TableCell>
));

const CharacterDetails = (): JSX.Element => {
  const [character, setCharacter] = useState<any | null>([]);
  const [films, setFilms] = useState<any | null>([]);

  const { id } = useParams();

  const handleCharacterRequest = async (id: string) => {
    try {
      const characterResult = await getCharacter(id);
      const filmsResult = await getCharacterFilms(characterResult.films);
      setCharacter(characterResult);
      setFilms(filmsResult);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(character);

  useEffect(() => {
    handleCharacterRequest(id);
  }, []);

  return (
    <Container>
      <Card elevation={0} variant="outlined">
        <CardContent>
          <Table>
            <TableHead>
              <TableRow >{headerList}</TableRow>
            </TableHead>
            <TableBody>
              <TableRow {...rowCellStyles}>
                <TableCell sx={{ paddingLeft: "50px"}}>{character.name}</TableCell>
                <TableCell sx={{ paddingLeft: "50px"}}>{character.height}</TableCell>
                <TableCell sx={{ paddingLeft: "50px"}}>{character.mass}</TableCell>
                <TableCell sx={{ paddingLeft: "50px"}}>{character.hair_color}</TableCell>
                <TableCell sx={{ paddingLeft: "50px"}}>{character.eye_color}</TableCell>
                <TableCell sx={{ paddingLeft: "50px"}}>{character.skin_color}</TableCell>
                <TableCell sx={{ paddingLeft: "50px"}}>{character.birth_year}</TableCell>
                <TableCell sx={{ paddingLeft: "50px"}}>{character.gender}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
            <Typography sx={{ paddingLeft: "25rem"}}>Appeared in these films:</Typography>
          {films[0] ? <div>{films && <FilmList films={films}/>}</div> : null}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CharacterDetails;
