import React, { useState } from 'react'
import './GradesCida.css'

function GradesCida() {

const[inputAltura, setInputAltura] = useState('')
const[inputLargura, setInputLargura] = useState('')
const[inputComprimento, setInputComprimento] = useState()
const [resultado, setResultado] = useState()

  function calcularPreco(){
  setResultado((Number(inputLargura) + Number(inputComprimento))
   * 2 * inputAltura * 80)
  }

  return (
    <div className='perimetro-container'>
        
    <h2>Grades Cida input</h2>
    <label htmlFor="">Altura</label>
    <input type="number"
        value = {inputAltura}
        onChange = {(event) => setInputAltura(event.target.value)}
    />
    <label htmlFor=""> Largura</label>
    <input type="number"
      value={inputLargura}
      onChange={(e) => setInputLargura(e.target.value)} 
    />
    <label htmlFor="">Comprimento</label>
    <input type="number"
        value = {inputComprimento}
        onChange = {(event) => setInputComprimento(event.target.value)}
        />
      <button onClick={calcularPreco}> Calcular Preco do Terreno</button>
      {resultado && <p>O total foi de {resultado} </p>}
      
     </div>
  )
}


export default GradesCida