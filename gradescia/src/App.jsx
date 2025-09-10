import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicial from './components/Inicial'
import Regras from './components/Regras'
import Temperatura from './components/Temperatura'
import ConversorDistancia from './components/ConversorDistancia'
import AnoBissexto from './components/AnoBissexto'

function App() {

    

  return (
    <>
  <h1>Ola User</h1>
    <Inicial />
    <Regras />
    <Temperatura />
    <ConversorDistancia />
    <AnoBissexto />
  </>
  )
}

export default App
