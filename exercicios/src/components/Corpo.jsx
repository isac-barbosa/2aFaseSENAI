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





    return(
        <div className='corpo-container'> 
            <button className='button-container' onClick={pizzas}>PIZZAS</button>

        
        </div> 
        
        
        
        
        
        
    )



}