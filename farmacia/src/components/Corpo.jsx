import './Corpo.css'
import Texto from './Texto'
import Titulo from './Titulo'
import Footer from './Footer'
function Corpo(){
    return(

        
        <div className='corpo-container'>
            <div className='titulo-container'>
            <Titulo  titulo = {"SUA FARMARCIA"}/>
            </div>
            <Texto className = "texto" textocriado = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, accusamus! Aliquid ad, aliquam id officia voluptatem praesentium, minima amet fuga reprehenderit accusamus debitis explicabo nam eaque quae, porro quod tempora!"} />
            <img src="./img/loja.svg" className='img-container' />
            <div className='destaques-container'>
            <div> <a href="" className='text-img'> <img src="./img/capsula.svg" className='img-destaques'/> <h2>Medicamentos Populares </h2></a> </div>
            <div> <a href="" className='text-img'> <img src="./img/oferta.svg" className='img-destaques'/> <h2>Ofertas Especiais </h2></a> </div>
            <div> <a href="" className='text-img'> <img src="./img/atendimento.svg" className='img-destaques'/> <h2>Atendimento 24H </h2></a> </div>
            </div>
            <button> COMPRE AQUI</button>
            <Footer />
        </div>

    )


}
export default Corpo

