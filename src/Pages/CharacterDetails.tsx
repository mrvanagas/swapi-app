/* eslint-disable react-hooks/exhaustive-deps */
import {
  CardContent,
  Container,
  Table,
  Typography,
  TableHead,
  TableBody,
} from '@mui/material';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter, getCharacterFilms } from '../Api/api';
import FilmList from '../Components/FilmList';
import Spinner from '../Components/LoadingSpinner';
import CharacterRow from '../Components/CharacterRow';
import CharacterTableHeader from '../Components/CharacterTableHeader';

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
        {character.length !== 0 ? (
          <CardContent>
            <Table>
              <TableHead>
                <CharacterTableHeader />
              </TableHead>
              <TableBody>
                <CharacterRow character={character} />
              </TableBody>
            </Table>
            <Typography sx={{ paddingLeft: '25rem' }}>
              Appeared in these films:
            </Typography>
            {films && <div>{films && <FilmList films={films} />}</div>}
          </CardContent>
        ) : (
          <Spinner />
        )}
      </Card>
    </Container>
  );
};

export default CharacterDetails;
