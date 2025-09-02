import './Corpo.css'
import Texto from './Texto'
import Titulo from './Titulo'
import Capsula from './Capsula'
import Atendimento from './Atendimento'
import Oferta from './Oferta'
function Corpo(){
    return(

        
        <div className='corpo-container'>
            <div className='titulo-container'>
            <Titulo  titulo = {"SUA FARMÁRCIA"}/>
            </div>
            <div className='conteudo-container'>

            <Texto className = "texto" textocriado = {"Márcia possui formação em administração de empresas, com uma paixão especial por empreendedorismo e design Márcia sempre foi uma pessoa determinada e criativa. Ela cresceu em uma família onde o empreendedorismo era valorizado, inspirada pelo sucesso de seu tio Mário, que administrava uma farmácia local. Depois de se formar na faculdade, Márcia se casou e começou a trabalhar em uma empresa de marketing, onde pôde desenvolver suas habilidades em design e gestão. No entanto, sua vida pessoal deu uma reviravolta quando seu casamento chegou ao fim após um evento no mínimo estranho. Seu marido saiu para comprar cigarros e nunca mais voltou, deixando Márcia sozinha para lidar com a dor do abandono e o desafio de reconstruir sua vida."} />
            <img src='./img/loja.svg' className='img-container' />
            </div>
            <div className='destaques-container'>
            <Capsula  className = "destaques-container"  />
            <Atendimento  className = "destaques-container"/>
            <Oferta  className = "destaques-container"/>
            </div>
            
            
        </div>

    )


}
export default Corpo

