import React, { useState } from 'react'
import './Porco525.css'
function Porco525() {

    const [aprovado, setAprovado] = useState()

    function precoProduto(){
        let preco = Number(prompt("Qual o preço desse videogame da vitrine?"))
        
        let moeda1 = Number(prompt("Quantas moedas de 1 real você tem?"))
        let moeda50 = Number(prompt("Quantas moedas de 50 centavos você tem?")) * 0.5
        let moeda25 = Number(prompt("Quantas moedas de 25 centavos real você tem?")) * 0.25
        let moeda10 = Number(prompt("Quantas moedas de 10 centavos você tem?")) * 0.10
        let moeda5 = Number(prompt("Quantas moedas de 5 centavos você tem?")) * 0.05

        let calculo = moeda1 + moeda50 + moeda25 + moeda10 + moeda5

        if(preco <= calculo){
            setAprovado("Obrigado por me ajudar a efetuar a compra")
        }else{
            setAprovado("Achei esse preço abusivo")
        }



    }


  return (
    <div className='porco-container'> 
    <h2>Meu porquinho minhas regras</h2>
        <button onClick={precoProduto}> Será que consigo comprar?</button>
        {aprovado}
    
    </div>
  )
}



export default Porco525








// Faça um programa que leia o valor de um produto X e leia a quantidade de moedas de um cofrinho que contenha:
//  moedas de 1 real;
//  moedas de 50 centavos;
// moedas de 25 centavos;
//  moedas de 10 centavos;
//  moedas de 5 centavos;
// O programa deverá verificar se o total de reais que contem no cofrinho é o bastante para compra o produto X.
// <Muleta da compreensão: Tem que ler o preço da coisa; tem que ler a quantidade de cada moeda que tem no porco; calcular quantos pila tem no porco; ver se cabe no “orçamento”>

