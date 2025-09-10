import React, { useState } from 'react'
import './Temperatura.css'

function Temperatura() {
    const[farenheit, setFarenheit] = useState()

    function CalcularTemperatura(){

        let temperatura = Number(prompt("Nos diga primeiro em temperatura você quer converter"))
        let conversao = Number(prompt("Agora diga para qual você quer converter"))
        if(temperatura == "celsius" && conversao == "farenheit"){
            let F = (temperatura * 1.8) + 32
            alert(F)
        }
        else if(temperatura == "farenheit" && conversao == "celsius"){
            let C = (temperatura - 32) / 1.8
            alert(C)
        }
        else if(temperatura == "celsius" && conversao == "kelvin"){
            let K = temperatura + 273.15
            alert(K)
        }
        else if(temperatura == "kelvin" && conversao == "celsius"){
            let KC = temperatura - 273.15
            alert(KC)
        }
        else if(temperatura == "kelvin" && conversao == "farenheit"){
            let KF = (temperatura - 273.15)* 1.8 + 32
            alert(KF)
        }
        else if(temperatura == "farenheit" && conversao == "kelvin"){
            let FK = (temperatura - 32) * 5 / 9 + 273.15
            alert(FK)
        }
    }

  return (
    <div>
        <h1>Temperaturas</h1>
        <label htmlFor="">Converta</label>
        <input type="text"
        value={farenheit} 
        onChange={(e) => setFarenheit(e.target.value)}
        />
    <button onClick = {CalcularTemperatura}>BLABLA</button>
    </div>
  )
}

export default Temperatura