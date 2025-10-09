import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'

function Home() {
  return (
    <div >
      <Navbar />
      <div className='home-container'>
        <h2>Bem vindo ao Tião Empreendimentos</h2>
        <h4> 
        Aqui você encontra:
        </h4>
        <ul>
          <li>
          Petisco e bebidas 
            </li>
            <li>
          Sorvetes de todos os gostos
            </li>
            <li>
           Serviços de Borracharia
            </li>
           
        </ul>
          

          <img  className='imgs' src="./img/bar.png" />

          </div>
      </div>
  )
}

export default Home