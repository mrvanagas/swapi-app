import { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';

const FilmList = (data) => {
  const [films, setFilms] = useState<any>();

  useEffect(() => {
    const { films } = data;
    setFilms(films);
  }, [data]);

  return (
    <Container>
      {films &&
        films.map((film: any) => (
          <Card sx={{ minWidth: 300 }} key={film.title}>
            <CardContent>
              <Typography variant="h5" component="div">
                {film.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {film.release_date}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Container>
  );
};

export default FilmList;
