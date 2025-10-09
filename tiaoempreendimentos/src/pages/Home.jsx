import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'

function Home() {
  return (
    <div >
      <Navbar />
      <div className='home-container'>
        <h1>Bem vindo ao Tião Empreendimentos</h1>
        <h2> 
        Aqui você encontra:
        </h2>
        <ul>
          <li>
          <h4>Petisco e bebidas </h4>
            </li>
            <li>
          <h4>Sorvetes de todos os gostos</h4>
            </li>
            <li>
           <h4>Serviços de Borracharia</h4>
            </li>
           
        </ul>
          

          <img className='imgs' src="./img/bar.png" />
          <div className='sorveteria-container'>
          <img className='imgs'src="./img/sorveteria.png" />
          <div className='cards-container'>
            <h3 className='subtitulos'>Sorveteria deliciosa</h3>
            <p className='text'>
              Depois de um longo dia (ou da melhor rodada de cerveja), nada como um doce conforto. 
              Nossos sorvetes seguem receitas tradicionais, preparadas com o carinho e a simplicidade dos velhos tempos. 
              Sabores cremosos que te transportam direto para a infância.
              </p>
          </div>
          </div>

          </div>
      </div>
  )
}

export default Home