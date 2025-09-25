import React from 'react'
import { useEffect, useState } from 'react'
import './Combustiveis.css'
function Combustiveis() {
    const[alcool, setAlcool] = useState()
    const[diesel, setDiesel] = useState()
    const[gasolina, setGasolina] = useState()
    const[saida, setSaida] = useState()
    const[somagasolina, setSomagasolina] = useState(0)
    const[somadiesel, setSomadiesel] = useState(0)
    const[somaalcool, setSomaalcool] = useState(0)


        function addDiesel(){
            setSomadiesel(somadiesel + Number(diesel))

        }
        function addAlcool(){
            setSomaalcool(somaalcool + Number(alcool))

        }
        function addGasolina(){
        setSomagasolina(somagasolina + Number(gasolina))
        }
    
        function tipoDeCombustível(){
            let result = gasolina + alcool + diesel 
            setSaida(result)
            
    
        }
  return (
    <div className='combustivel-container'>
        <h2>Combustiveis</h2>
        <div>
        <label htmlFor="">Alcool</label>
        <input type="text"
        value={alcool}
        onChange={(e) => setAlcool(e.target.value)} />
        <button onClick={addAlcool}>+</button> {somaalcool}
        </div>
        <div>

        <label htmlFor="">Diesel</label>
        <input type="text"
        value={diesel}
        onChange={(e) => setDiesel(e.target.value)} />
         <button onClick={addDiesel}>+</button> {somadiesel}
        </div>

         <div>
        <label htmlFor="">Gasolina</label>
        <input type="text"
        value={gasolina}
        onChange={(e) => setGasolina(e.target.value)} /> 
        <button onClick={addGasolina}>+</button> {somagasolina}
        </div>
        
       
        
    </div>
  )
}

export default Combustiveis