import './Corpo.css'
import Textao from './Textao'
import Texto from './Texto'
import Titulo from './Titulo'
import Titulo2 from './Titulo2'

function Corpo() {
  function logar (){
    alert("Logado com sucesso!")
    let usuario = prompt("Digite o seu nome de usuario:")
    if(usuario == "barbosa"){
      alert("logado com sucesso")
    }else{
      alert('Erro!!! O usuario é barbosa')
    }
  }
  
  function cadastrar(){
    alert("Não ta pronta")

  }
  return (
    <div className="corpo-container">
        <Titulo />
        <Titulo2  texto = {"Primeiro pedaço de página"}/>
        <Texto    textocriado = {"Texto enviado para o componente via props"}/>
        <Titulo2  texto = {"Segundo pedaço de página"} emoji = {"😖"}/>
        <Textao   textaocriado = {"Textão enviado para o componente pelas props que são quase como argumentos de função porque na verdade são mesmo"} />
          <img src = "./imagens/imagem1.jpg" alt=" 150" className='imagem-corpo'/>
          <img src = "./imagens/imagem2.jpg" className='imagem-corpo'/>
          <button  className = "button-container"onClick={logar}>Logar</button>
          <button  className = "button-container"onClick={cadastrar}>Cadastrar</button>

    </div>
  )
}

export default Corpo