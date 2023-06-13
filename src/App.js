
import './App.css';
import Navbar from './Navbar';
import Cart from './cart'
import './index.css';

function App() {
  const cartCount = 9;
  return (
    <>
  <Navbar  cartCount={cartCount}/>
 <Cart />
 </>
  );
}

export default App;
