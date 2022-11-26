import { Box } from '@mui/material';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box bgcolor="GrayText">
      <Navbar />
      <Home />
      <Cart />
    </Box>
  );
}

export default App;
