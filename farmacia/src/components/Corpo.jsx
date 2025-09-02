import './Corpo.css'
import Texto from './Texto'
import Titulo from './Titulo'
import Footer from './Footer'
import Capsula from './Capsula'
import Atendimento from './Atendimento'
import Oferta from './Oferta'
function Corpo(){
    return(

        
        <div className='corpo-container'>
            <div className='titulo-container'>
            <Titulo  titulo = {"SUA FARMARCIA"}/>
            </div>
            <Texto className = "texto" textocriado = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, accusamus! Aliquid ad, aliquam id officia voluptatem praesentium, minima amet fuga reprehenderit accusamus debitis explicabo nam eaque quae, porro quod tempora!"} />
            <img src="./img/loja.svg" className='img-container' />
            <div className='destaques-container'>
            <Capsula  className = "destaques-container"  />
            <Atendimento  className = "destaques-container"/>
            <Oferta  className = "destaques-container"/>
            </div>
            <button> COMPRE AQUI</button>
            
        </div>

    )


}
export default Corpo

