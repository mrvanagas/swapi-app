import { Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter, getFilmInfo } from '../Api/api';
import FilmList from '../Components/FilmList';


const CharacterDetails = (): JSX.Element => {
  const [character, setCharacter] = useState<any | null>([]);
  const [films, setFilms] = useState<any | null>({})

  const { id } = useParams();

  const handleCharacterRequest = async (id) => {
    try {
      const results = await getCharacter(id);
      setCharacter(results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFilmRequest = async (data) => {
    try {
      const { films_url } = data;
      if (films_url) {
        const result = await Promise.all(
          films_url.map((url) => {
            return getFilmInfo(url)
          })
        );
        setFilms(result)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleCharacterRequest(id)
  }, [])


  // useEffect(() => {
  //   if (character) {
  //     handleFilmRequest(character.films)
  //   }
  // }, [])

  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/people/${id}`)
  //   .then((res) => {
  //     console.log(res)
  //     setCharacter(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }, [])

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
        <Typography>
          Appeared in these films:
          {/* <div>{films && <FilmList films={films} />}</div> */}
        </Typography>
      </Card>
    </Container>
  );
};

export default CharacterDetails;
