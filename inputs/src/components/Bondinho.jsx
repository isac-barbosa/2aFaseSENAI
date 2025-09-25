import React, { useEffect, useState } from 'react'
import './Bondinho.css'

function Bondinho() {
    const[alunos, setAlunos] = useState()
    const[monitores, setMonitores] = useState()
    const[saida, setSaida] = useState()
    function qtdPessoas(){
        if(alunos + monitores > 50){
            setSaida('Número de pessoas ultrapassado')
        }
        else{
            setSaida('Pronto para chegar ao topo')
        }

    }

  return (
    <div className='bondinho-container'>
        <h2>Bondinho</h2>
        <label htmlFor="">Numero de alunos</label>
        <input type="text" 
        value={alunos}
        onChange={(e) => setAlunos(e.target.value)}/>

        <label htmlFor="">Numero de monitores</label>
        <input type="text"
        value={monitores}
        onChange={(e) => setMonitores(e.target.value)} />

        <button onClick={qtdPessoas}>Veja se cabe</button>
        {saida}
    </div>
  )
}

export default Bondinho