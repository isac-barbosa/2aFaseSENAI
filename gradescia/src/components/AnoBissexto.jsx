import React, { useState } from 'react'
import './AnoBissexto.css'


function AnoBissexto(){
    const[inputAno, setinputAno] = useState()
    const[resultado, setResultado] = useState()
    const[valor, setValor] = useState()


    function CalcularAno(){
        let ano = Number(valor)
        

        if((ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0){
            setResultado("Ano bissexto")
        }
        else{
            setResultado("Ano não bissexto")
        }
    }
    
    return(
    <div className='ano-container'>
        <h2>Ano Bissexto</h2>
        <label htmlFor="">Ano que deseja saber </label>
        <input type="text"
        value={valor} 
        onChange={(e) => setValor(e.target.value)}/>

        <button onClick={CalcularAno}>Calcule o ano bissexto</button>
        {resultado}
    </div>
   ) 
    
    
    
    
    
    
    
}
export default AnoBissexto