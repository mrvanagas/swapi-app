import { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography, Grid } from '@mui/material';

const FilmList = (data: any): JSX.Element => {
  const [films, setFilms] = useState<any>([]);

  useEffect(() => {
    const { films } = data;
    const sortByDescending = (obj: any[]) => {
      return obj.sort((a, b) => {
        return Date.parse(b.release_date) - Date.parse(a.release_date);
      });
    };
    setFilms(sortByDescending(films));
  }, [data]);

  return (
    <Container sx={{ padding: '2rem', margin: 'auto' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {films &&
          films.map((film: any) => (
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 300 }} key={film.title}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {film.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {film.release_date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default FilmList;
