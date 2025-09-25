import React, { useEffect, useState } from 'react'
import './Pum.css'
function Pum() {

    const[saida, setSaida] = useState()
    const[entrada, setEntrada] = useState('')


    function calculoPum(){
      
        let linhas = 0
        let i = 1
        let texto = ""


        while(linhas < entrada){
            if(i % 4 != 0){
               texto = texto + i + ' ';
                
            }
            else{
            
                texto = texto + "PUM <br>"
                linhas++
            }
            i++
        }
        setSaida(texto)
    }



        
        return (
        <div className='pum-container'>
        <h2>Pum</h2>
        <label htmlFor="">Digite um número inteiro</label>
        <input type="text"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)} />

        <button onClick={calculoPum}>Calcule</button>
        {saida}
    </div>
  )
}


export default Pum