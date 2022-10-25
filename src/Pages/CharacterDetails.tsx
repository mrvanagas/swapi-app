import { Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CharacterDetails = () => {
  const [character, setCharacter] = useState<any>([]);
  
    useEffect(() => {
      axios.get('https://swapi.dev/api/people/1')
      .then((res) => {
        console.log(res)
        setCharacter(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }, [])

    return (
      <Container>
        <Card elevation={0} variant="outlined">
          <Typography>Name is {character.name}</Typography>
          <Typography>Height is {character.height}</Typography>
          <Typography>Weight is {character.mass}</Typography>
          <Typography>Hair color is {character.hair_color}</Typography>
          <Typography>Eye color is {character.eye_color}</Typography>
          <Typography>Skin color is {character.skin_color}</Typography>
          <Typography>Birth date  is {character.birth_year}</Typography>
          <Typography>Gender is {character.gender}</Typography>
        </Card>
      </Container>
    );
  };

export default CharacterDetails;
