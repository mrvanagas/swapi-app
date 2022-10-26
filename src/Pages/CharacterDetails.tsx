/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter, getCharacterFilms } from '../Api/api';
import FilmList from '../Components/FilmList';

const CharacterDetails = (): JSX.Element => {
  const [character, setCharacter] = useState<any | null>([]);
  const [films, setFilms] = useState<any | null>([])

  const { id } = useParams();

  const handleCharacterRequest = async (id: string) => {
    try {
      const characterResult = await getCharacter(id);

      const filmsResult = await getCharacterFilms(characterResult.films);

      setCharacter(characterResult);
      setFilms(filmsResult)
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    handleCharacterRequest(id);
  }, []);

  return (
    <Container>
      <Card elevation={0} variant="outlined">
        <Typography>Name is {character.name}</Typography>
        <Typography>Height is {character.height}</Typography>
        <Typography>Weight is {character.mass}</Typography>
        <Typography>Hair color is {character.hair_color}</Typography>
        <Typography>Eye color is {character.eye_color}</Typography>
        <Typography>Skin color is {character.skin_color}</Typography>
        <Typography>Birth date is {character.birth_year}</Typography>
        <Typography>Gender is {character.gender}</Typography>
        <Typography>Appeared in these films:</Typography>
        {films[0] ? (
          <div>{films && <FilmList films={films}/>}</div>
        ) : (null)}
        
      </Card>
    </Container>
  );
};

export default CharacterDetails;
