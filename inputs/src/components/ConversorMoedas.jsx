import React, { useState } from 'react'

function ConversorMoedas() {
    const[real, setReal] = useState('')
    const[dolar, setDolar] = useState('')
    const[euro, setEuro] = useState('')
    const cotacao = {
        dolar: 5.43,
        euro: 6.36
    }

    function ConverterReal(){
        setReal(valor)
        setDolar(valor * 5.43)

    }
    function ConverterDolar(valor){
        setDolar(valor)
        setReal(valor / 5.43)
    }
  return (
    <div>
        <h2>ConversorMoedas</h2>
        <label htmlFor="">Real</label>
        <input type="text" 
        value={real}
        onChange={(e) => ConverterReal(e.target.value)}
        />
        <label htmlFor="">Dolar</label>
        <input type="text" 
        value={dolar}
        onChange={(e) => ConverterDolar(e.target.value)}
        />
        <label htmlFor="">Euro</label>
        <input type="text" 
        value={euro}
        onChange={(e) => ConverterEuro(e.target.value)}
        />
        </div>
  )
}

export default ConversorMoedas