import  { useState } from 'react'

function Regras() {
    const[regras, setRegras] = useState("")
    function Mensagem(){
        setRegras("Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.")
    }
  return (
    <div>
        <h1>Regras</h1>

        <button onClick={Mensagem}>Clique já</button>
        {regras && regras}

    </div>
  )
}

export default Regras