import React, { useState } from 'react'
import './Pneu.css'
function Pneu() {
    const[entrada, setEntrada] = useState()
    const[saida, setSaida] = useState()
    const[atual, setAtual] = useState()


    function Calibrar(){

        let calculo = entrada - atual
        setSaida(calculo)
    }
  return (
    <div className='pneu-container'>
        <h2>Pneus</h2>
        <label htmlFor=""> Digte a pressão que deseja colocar</label>
        <input type="text" 
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}/>

        <label htmlFor="">Pressão atual do pneu</label>
        <input type="text" 
        value={atual}
        onChange={(e) => setAtual(e.target.value)}/>

        <button onClick={Calibrar}> Calibrar</button>
        
        {saida && <p> A diferença de pressão é de: {saida} </p>}
    </div>
  )
}

export default Pneu