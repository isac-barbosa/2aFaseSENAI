import React, { useState } from 'react'
import './Copo.css'

function Copo() {
    const[meiocheio, setmeioCheio] = useState()
    function nulo(){
        let valor
        do{
            valor = prompt("Digite qualquer numero positivo, negativo ou nulo")
        }while(valor == '')

        valor = Number(valor)
        if(valor > 0){
            setmeioCheio("Numero positivo")
        }else if(valor < 0){
            setmeioCheio("Numero neegativo")
        }else if( valor == ""){
            setmeioCheio("Valor nulo")
        }
    }
    const[par,setPar] = useState()

    function numeropar(){
        let numero = Number(prompt("Digite um numero"))
        if(numero > 0 && numero % 2 == 0 ){
            setPar("Este numero é par e positivo")
        }else if(numero > 0){
            setPar("Numero positivo mas não é par")
        }
    }

  return (
    <div className='copo-container'>
        <h2>
            Copo
            </h2>
        <button onClick={nulo}> +  - ou nulo</button>
        {meiocheio}
        <button onClick={numeropar}> Decubra se é par e positivo</button>
        {par}
    </div>
  )
}

export default Copo