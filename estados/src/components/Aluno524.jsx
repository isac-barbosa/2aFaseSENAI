import React, { useState } from "react"


function Aluno524() {

    const[conceito, setConceito] = useState()

    function calcularmedia(){


        let nota1 = Number(prompt("Digite sua primeira nota: "))
        let nota2 = Number(prompt("Digite sua segunda nota: "))
        let media = (nota1 + nota2) / 2
        console.log(media)
        if(media <= 4){
            setConceito("E")


        }else if(media >4 && media <=6){
            setConceito("D")


        }else if(media >6 && media <= 7.5){
            setConceito("C")


        }else if(media >7.5 && media <= 9){

            setConceito("B")

        }else{
            setConceito("A")
        }

    }

  return (
    <div>
        <h2>Alunos</h2>
        <button onClick={calcularmedia}> Calcule sua Media</button>
        {conceito && <p>Pela sua nota você caiu no conceito {conceito} </p>}

    </div>
  )
}

export default Aluno524