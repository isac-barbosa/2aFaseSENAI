import React, { useState } from 'react'
import './CalculadoraIMC.css'

function CalculadoraIMC() {
    const[peso, setPeso] = useState()
    const[altura, setAltura] = useState()
    const[resultado, setResultado] = useState()
    function Calculeimc(){
        let calculo = peso / (altura^2)
      setResultado(calculo)

    }


  return (
    <div className='imc-container'>
        <h2>Calculadora IMC</h2>
        <label htmlFor="">Digite seu peso</label>
        <input type="text" 
        value={peso}
        onChange={(e) => setPeso(e.target.value)}/>
        <label htmlFor="">Digite sua altura</label>
        <input type="text"
        value={altura} 
        onChange={(e) => setAltura(e.target.value)}/>

        <button onClick={Calculeimc}>Calcule seu índice corporal</button>
        {resultado && <p>O seu imc é de {resultado} </p> }
        </div>
  )
}

export default CalculadoraIMC