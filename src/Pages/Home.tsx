import { Container } from '@mui/material'
import CharacterTable from '../Components/CharacterTable'
import Searchbar from '../Components/Searchbar'

const Home = () => {
  return (
    <Container>
      <Searchbar />
      <CharacterTable />
    </Container>
  )
}

export default Home