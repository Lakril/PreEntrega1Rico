import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Form from './components/Form';
import ShoppingCartContext from './context/ShoppingCartContext';
// task context
import { ContextProvide } from './context/ContextProvide';
// import ItemDetail from './components/ItemDetail'

function App() {
  return (
    <BrowserRouter>
      {/* task: crear tu context*/}
      <ContextProvide></ContextProvide>

      <ShoppingCartContext>
        <NavBar />
      </ShoppingCartContext>
      <Routes>
        {/* <ItemListContainer greeting={greeting} /> */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/form' element={<Form />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route
          exact
          path='/category/:category'
          element={<ItemListContainer />}
        />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/*' element={<Navigate to='/about' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
