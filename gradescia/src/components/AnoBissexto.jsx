import React, { useState } from 'react'
import './AnoBissexto.css'


function AnoBissexto(){
    const[inputAno, setinputAno] = useState()
    const[resultado, setResultado] = useState()
    const[valor, setValor] = useState()


    function CalcularAno(){
        let ano = Number(valor)
        let resutado;
            








        setResultado(resultado)
    }
    
    return(
    <div className='ano-container'>
        <h2>Ano Bissexto</h2>
        <label htmlFor="">Ano que deseja saber </label>
        <input type="text"
        value={inputAno} 
        onChange={(e) => setinputAno(e.target.value)}/>



        <button onClick={CalcularAno}>Calcule o ano bissexto</button>
    </div>
   ) 
    
    
    
    
    
    
    
}
export default AnoBissexto