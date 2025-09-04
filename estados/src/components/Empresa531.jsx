import React, { useState } from 'react'
import './Empresa531.css'

function Empresa531() {
    const[parcelas, setParcelas] = useState()
    function prestacoes(){
        let salario
        do{
            salario = (prompt("Informe seu salário para que possamos começar"))
        }while(salario == "" || salario == 0)
        salario = Number(salario)
            

        let emprestimo
        do{
           emprestimo = prompt("Informe o valor do empréstimo que desejas")
        }while(emprestimo == "" || emprestimo == 0)
        emprestimo = Number(emprestimo)
        
        let prestacoes 
        do{
            prestacoes = prompt("Agora nos diga o numero de prestações")
        }while(prestacoes == "" || prestacoes == 0)
        prestacoes = Number(prestacoes)

        let  valorparcela = emprestimo / prestacoes
        let  limite = salario * 0.30

        if(valorparcela > limite){
            setParcelas("Emprestimo não concedido")
        }else{
            setParcelas("Emprestimo concedido")
        }

    }

  return (
    <div className='empresa-container'>
        <h2>Empresa</h2>
        <button onClick={prestacoes}>Prestações da empresa</button>
        {parcelas}
    </div>
  )
}

export default Empresa531