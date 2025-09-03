import { useState } from 'react'
import './App.css'
import Venda523 from './components/Venda523'
import Aluno524 from './components/Aluno524'

function App() {
  //Lembrar de não usar variaveis aqui

  const[numero, setNumero] = useState(0)
  const[username, setUsername] = useState("Juliozao bom de boquetao")


  function incrementar(){
    setNumero(numero + 1)
  }
  function decrementar(){
    setNumero(numero - 1)
  }

  function logar(){
    let nome = prompt("Digite o seu nome")
    setUsername(nome)
  }
  
  function calcularmedia(){
    let nota = prompt("Digite suas notas")

  }
  return (
    <>

    {/* {username && <p> render condicional </p>} */}


    {username && 
     <p className='user'> Seja bem vindo { username}
     </p>
    }
      <button onClick={logar}>Logar</button>

     <h1>Estados</h1>
     <button onClick={incrementar}>+</button>
     {numero}
     <button onClick = {decrementar}>-</button>


    <Venda523 />
    <Aluno524 />
    </>
  )
}

export default App
