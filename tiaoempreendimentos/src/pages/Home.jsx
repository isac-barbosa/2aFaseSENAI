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
          


          <div className='bar-container'>
          <img className='imgs' src="./img/bar.png" />
          <div className='cards-container'>
          <h3 className='subtitulos'> Tião Bar </h3>
          <p className='text'>
            O Bar Tião Empreendimentos é o ponto de encontro perfeito para quem busca boa música, bons drinks e ótimas companhias. Nosso ambiente é descontraído e acolhedor, pensado para que cada visita se torne uma experiência única.
            Oferecemos uma variedade de bebidas, desde os clássicos até coquetéis especiais preparados com ingredientes de qualidade. Além disso, temos petiscos e porções deliciosas, ideais para acompanhar a conversa e o clima de diversão.
            No Bar do Tião, cada detalhe é feito com cuidado, combinando sabor, alegria e um atendimento que faz você se sentir em casa.
            Tião Empreendimentos — onde o lazer e o bom gosto se encontram.

          </p>

          </div>
          </div>


          <div className='sorveteria-container'>
          <img className='imgs'src="./img/sorveteria.png" />
          <div className='cards-container'>
            <h3 className='subtitulos'>Sorveteria deliciosa</h3>
            <p className='text'>

              A Sorveteria Tião Empreendimentos nasceu com o propósito de oferecer momentos de sabor e alegria para toda a família. Trabalhamos com sorvetes artesanais, feitos com ingredientes selecionados e naturais, garantindo cremosidade, frescor e qualidade em cada colherada.
              Nosso cardápio conta com sabores tradicionais e exclusivos, atendendo a todos os gostos — do clássico chocolate ao irresistível açaí.
              Mais do que um lugar para se refrescar, nossa sorveteria é um espaço para compartilhar bons momentos, com atendimento acolhedor e ambiente pensado para o seu conforto.
              Tião Empreendimentos: transformando simplicidade em sabor e boas lembranças.
              </p>
              <h3></h3>
          </div>
          </div>

          </div>
      </div>
  )
}

export default Home