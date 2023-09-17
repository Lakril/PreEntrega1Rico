// import { useState } from 'react'
//import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  const greeting = "Bienvenidos a mi empresa de renta de propiedades"

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App
