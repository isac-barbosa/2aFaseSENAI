import React, { useState } from 'react'

function Regras() {
    const[inputRegras, setInputRegras] = useState()
    function Mensagem(){
        alert("Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.")
    }
  return (
    <div>
        <h1>Regras</h1>
        <label htmlFor="">Regras</label>
        <input type="text" 
        value={inputRegras}
        onChange={(e) => setInputRegras(e.target.value)}
       
        />
        <button onClick={Mensagem}>Clique já</button>

    </div>
  )
}

export default Regras