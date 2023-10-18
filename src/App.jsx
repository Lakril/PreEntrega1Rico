import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Form from './components/Form';
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemDetail from './components/ItemDetail'

// Contexts
import CartState from './context/Products/CartState';

function App() {
  return (
    <BrowserRouter>
      <CartState>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/*" element={<Navigate to="/about" />} /> */}
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </CartState>
    </BrowserRouter>
    //
    //
    //
    //
    //
    //
  );
}

export default App;
