import { useState } from 'react'
// import './App.css'

/* estilos globais */
import  './components/Global.css';

import Header from './components/Header'
import Introduce from './components/Introduce';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Introduce />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </>
  )
}

export default App;
