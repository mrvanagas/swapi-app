import { Route, Routes} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import CharacterDetails from './Pages/CharacterDetails';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/character/:id' element={<CharacterDetails />}/>
    </Routes>
    </>
  );
}

export default App;
