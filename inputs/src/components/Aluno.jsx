import './Aluno.css'
import React, { useState } from 'react'
function Aluno() {
    const[nota1, setNota1] = useState('')
    const[nota2, setNota2] = useState('')
    const[media, setMedia] = useState('')

    function calcularmedia(){
    
        let calculo = (Number(nota1) + Number(nota2)) / 2
        console.log(calculo)
        if(calculo < 4){
            setMedia("Reprovado")
        }
        if(calculo >= 4 && calculo < 7){
            setMedia("Recuperação")
        }
        if(calculo >= 7){
            setMedia("Aprovado")
        }

    }
  return (
    <div className='aluno-container'>
        <h2>Aluno</h2>
        <label htmlFor="">Digite sua primeira nota</label>
        <input type="text"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)} />

        <label htmlFor="">Digite sua segunda nota</label>
        <input type="text"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)} />


        <button onClick={calcularmedia}> Média</button>
        {media && <p>Você está {media}</p>}
    </div>
  )
}

export default Aluno