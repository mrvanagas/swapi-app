import { Container, Card, Typography, CardContent } from '@mui/material'

const About = () => {
  return (
    <Container>
      <Card sx={{ margin: '2rem'}}>
        <CardContent>
          <Typography>
            This app was built using React v18, Typescript and Material UI. Additional packages used: Axios, styled-components.
            Data was provided by https://swapi.dev/
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default About