import './Corpo.css'
import Texto from './Texto'
import Titulo from './Titulo'
function Corpo(){
    return(

        
        <div className='corpo-container'>
            <div className='titulo-container'>
            <Titulo  titulo = {"SUA FARMARCIA"}/>
            </div>
            <Texto  textocriado = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, accusamus! Aliquid ad, aliquam id officia voluptatem praesentium, minima amet fuga reprehenderit accusamus debitis explicabo nam eaque quae, porro quod tempora!"} />
            <img src="./img/loja.svg" className='img-container' />
            <button> COMPRE AQUI</button>

        </div>

    )


}
export default Corpo

