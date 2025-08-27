import './Corpo.css'

function Corpo(){
    function pizzas(){
        let tamanho = prompt(" Você quer pizza Pequena Media ou Grande")
        if(tamanho == "pequena"){
            alert("Custa apenas R$65,00 ")
        }else if(tamanho == "media"){
            alert("Está na faixa de R$76,90")
        }else{
            alert("R$90,00")
        }
    }

    function conversao(){
        let moeda = prompt("Escolha uma moeda: Real, Dólar, Euro")
        let valor = Number(prompt("Digite um valor"))
        let escolha = prompt("Para qual moeda você deseja converter?")

        if(moeda == "real" && escolha == "dolar"){
            let calculoReal = valor * 5.42
            alert("Sua conversão ficou em " + calculoReal + " dólares")
        }
        else if(moeda == "dolar" && escolha == "real"){
            let calculoDolar = valor * 5.42
            alert("Sua conversão ficou em "+ calculoDolar + "R$")
        }
        else if(moeda == "real" && escolha == "euro"){
            let calculoReal2 = valor * 6.31
            alert("Sua conversão ficou em " + calculoReal2 + " euros")
        }
        else if(moeda == "euro" && escolha == "real"){
            let calculoEuro2 = valor * 6.31
            alert("Sua conversão ficou em " + calculoEuro2 + "R$")
        }
        else if(moeda == "dolar" && escolha == "euro"){
            let calculoDolar2 = valor * 0.86
            alert("Sua conversão ficou em " + calculoDolar2 + "euros")
        }
        else if(moeda == "euro" && escolha == "dolar"){
            let calculoEudo = valor * 0.86
            alert("Sua conversão ficou em " + calculoEudo + "R$")
        }

    }

    function temperatura(){
        let graus = prompt("Quantos graus esta fazendo aonde você está?")
        let clima = prompt("Como esta o clima? ensolarado, chuvoso, ou nublado")
        if(graus >= 22 && clima == "ensolarado"){
            alert("Vista uma camiseta clara e uma bermuda preta ")
        }
        else if(graus >=22 && clima == "nublado"){
            alert("Leve um casaco, o clima pode esfriar")
        }
        else if(graus >=22 && clima == "chuvoso"){
            alert("Apesar do calor, não esqueça seu guarda-chuva 🙃")
        }
        else if(graus <=20 && clima == "ensolarado" || clima == "nublado"){
            alert("Leve um casaco, o clima pode esfriar!!!")
        }
        else if(graus <=12 ){
            alert("Já pode sair de cobertor")
        }
    }





    return(
        <div className='corpo-container'> 
            <button className='button-container' onClick={pizzas}>PIZZAS</button>
            <button className='button-container' onClick={conversao}>Converta suas moedas aqui</button>
            <button className='button-container' onClick={temperatura}>Guarda roupa mágico</button>
            
        
        </div> 
        
        
        
        
        
        
    )



}

export default Corpo