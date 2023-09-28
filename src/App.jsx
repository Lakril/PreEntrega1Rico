import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import Form from './components/Form'
import ShoppingCartContext from './context/ShoppingCartContext'
// import ItemDetail from './components/ItemDetail'

function App() {

  // const greeting = "Bienvenidos a mi empresa de renta de propiedades"

  return (
    <>

      <BrowserRouter>
        <ShoppingCartContext>
          {/* <CartWidget /> */}
          <NavBar />
          <Routes>


            {/* <ItemListContainer greeting={greeting} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/form' element={<Form />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/category/:category' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </ShoppingCartContext>
      </BrowserRouter >
    </>
  )
}

export default App

/*
Eventos

En HTML
<button onclick="enviarInformacion()..."

En JSX
<button onClick={enviarInformacion}..."

<form onsubmit="agregarInformacion()"..

<form onSubmit={agregarInformacion}..




*/