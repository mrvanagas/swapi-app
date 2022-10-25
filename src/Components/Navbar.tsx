import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start">
          <ApiIcon />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          SWAPI App
        </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color='secondary'>
          <Link to="/">
            <Typography>
                Home
            </Typography>
            </Link>
        </Button>
        <Button variant="contained" color='secondary'>
          <Link to="/about">About</Link>
        </Button>
      </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
