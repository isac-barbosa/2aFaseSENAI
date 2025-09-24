import React, { useState } from 'react'
import './ConversorDistancia.css'


function ConversorDistancia() {
    const[entrada, setEntrada] = useState()
    const[saida, setSaida] = useState()
    const[valor, setValor] = useState()
    const[resultado, setResultado] = useState()
    
    function Calcule(){
        let distancia = Number(valor)
        let resultado;


        if(entrada == "metros" && saida == "quilometros") resultado = distancia / 1000
        else if(entrada == "metros" && saida == "milhas") resultado = distancia / 1609
        else if(entrada == "metros" && saida == "pes") resultado = distancia * 3.281

        else if(entrada == "quilometros" && saida == "metros") resultado = distancia * 1000
        else if(entrada == "quilometros" && saida == "milhas") resultado = distancia / 1.609
        else if(entrada == "quilometros" && saida == "pes") resultado = distancia * 3281

        else if(entrada == "milhas" && saida == "quilometros") resultado = distancia * 1.609
        else if(entrada == "milhas" && saida == "metros") resultado = distancia / 1609
        else if(entrada == "milhas" && saida == "pes") resultado = distancia * 5280

        else if(entrada == "pes" && saida == "metros") resultado = distancia / 3.281
        else if(entrada == "pes" && saida == "quilometros") resultado = distancia / 3281
        else if(entrada == "pes" && saida == "milhas") resultado = distancia / 5280

        setResultado(resultado)
    }


 return(
    <div className='distancia-container'> 
        <h2>Conversor Distancia</h2>
        <label htmlFor="">Converta</label>
        <input type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)} 
        />
        <label htmlFor="">De: </label>
        <select value={entrada} onChange={(e) => setEntrada(e.target.value)}>
        <option value="">Seleciona a unidade</option>
        <option value="metros">Metros</option>
        <option value="quilometros">Quilômetros</option>
        <option value="milhas">Milhas</option>
        <option value="pes">Pés</option>
        </select>

        <label htmlFor="">Para: </label>
        <select value={saida} onChange={(e) => setSaida(e.target.value)}>
        <option value="">Selecione a unidade</option>
        <option value="metros">Metros</option>
        <option value="quilometros">Quilômetros</option>
        <option value="milhas">Milhas</option>
        <option value="pes">Pés</option>
        </select>



        <button onClick={Calcule}>Converter</button>
        {resultado !== undefined && (
                <h2>Resultado: {resultado} {saida}</h2>
            )}
    </div>

 )   
}
export default ConversorDistancia