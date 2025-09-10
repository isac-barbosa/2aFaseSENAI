import React, { useState } from 'react'
import './Temperatura.css'

function Temperatura() {
    const[valor, setValor] = useState()
    const[entrada, setEntrada] = useState("")
    const[saida, setSaida] = useState("")
    const[resultado, setResultado] = useState()

    function CalcularTemperatura(){

        let temperatura = Number(valor)
        let resultado;

        if(entrada == "celsius" && saida == "farenheit") resultado = (temperatura * 1.8) + 32
         
        else if(entrada == "farenheit" && saida == "celsius") resultado = (temperatura - 32) / 1.8

        else if(entrada == "celsius" && saida == "kelvin") resultado = temperatura + 273.15
  
        else if(entrada == "kelvin" && saida == "celsius") resultado = temperatura - 273.15

        else if(entrada == "kelvin" && saida == "farenheit") resultado = (temperatura - 273.15)* 1.8 + 32

        else if(entrada == "farenheit" && saida == "kelvin") resultado = (temperatura - 32) * 5 / 9 + 273.15
        
        setResultado(resultado.toFixed(2));
    }

  return (
    <div className='temp-container'>
        <h1>Temperaturas</h1>
        <label htmlFor="">Converta</label>
        <input type="text"
        value={valor} 
        onChange={(e) => setValor(e.target.value)}
        />
        <label>De: </label>
        <select value={entrada} onChange={(e) => setEntrada(e.target.value)}>
        <option value="">Selecione a unidade</option>
        <option value="celsius">Celsius</option>
        <option value="farenheit">Farenheit</option>
        <option value="kelvin">Kelvin</option>
        </select>
        <label>Para: </label>
        <select value={saida} onChange={(e) => setSaida(e.target.value)}>
        <option value="">Selecione a unidade</option>
        <option value="celsius">Celsius</option>
        <option value="farenheit">Farenheit</option>
        <option value="kelvin">Kelvin</option>
        </select>

        <button onClick = {CalcularTemperatura}>Converter</button>

        {resultado !== undefined && (
                <h2>Resultado: {resultado} {saida}</h2>
            )}
    </div>
  )
}

export default Temperatura