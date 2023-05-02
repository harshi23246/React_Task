import './App.css';
import NavBar from './components/NavBar';
import Cart from './features/cart/Cart';
import { Route,Routes } from 'react-router-dom';
import DisplayBooks from './features/book/DisplayBooks';
import SelectedBook from './features/bookDetail/SelectedBook';
import MyOrders from './features/order/MyOrders';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<DisplayBooks />}/>
        <Route path='/:selectedBook/:id' element={<SelectedBook />}/>
        <Route path='/myOrders' element={<MyOrders />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<NoMatch />}/>
      </Routes>
    </>
  
  );
}

export default App;
