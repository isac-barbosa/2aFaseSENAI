import React, { useState } from 'react'
import {useEffect, useRef} from 'react'
import './TrajetoPomar.css'
function TrajetoPomar() {
    const macaRef = useRef(null)
    const peraRef = useRef(null)
    const laranjaRef = useRef(null)
    useEffect(() => {
        function handleKeyDown(e){
            if(e.key == "m" ){
                e.preventDefault();
                macaRef.current?.focus()
            }      
            if(e.key == "l" ){
                e.preventDefault();
                laranjaRef.current?.focus()
            }      
            if(e.key == "p" ){
                e.preventDefault();
                peraRef.current?.focus()
            }      
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])
    
    const[valor, setValor] = useState()
    const [qntdMaca, setQntdMaca] = useState()
    const [qntdLaranja, setQntdLaranja] = useState()
    const [qntdBergamota, setQntdBergamota] = useState()
    const [qntdBanana, setQntdBanana] = useState()
    const [qntdPera, setQntdPera] = useState()
    const[resultado, setResultado] = useState()


    function Trajeto(){
        
        let resultado;

        const precos = {
        "Maçã": 1.5,
        "Laranja": 2.0,
        "Bergamota": 1.0,
        "Banana": 1.2,
        "Pera": 0.5,
        };
        let fruta = Number(valor)
        if(fruta == "Maçã") resultado = precos["Maçã"] * qntdMaca
        if(fruta == "Laranja") resultado = precos["Laranja"] * qntdLaranja
        if(fruta == "Bergamota") resultado = precos["Bergamota"] * qntdBergamota
        if(fruta == "Banana") resultado = precos["Banana"] * qntdBanana
        if(fruta == "Pera") resultado = precos["Pera"] * qntdPera

        setResultado((resultado + resultado + resultado + resultado + resultado).toFixed(2));
    
    } 

  return (
    
    <div style={{ padding: "2rem"}}  className='trajeto-container'>
    
        <h2>TRAJETO POMAR</h2>
        <label htmlFor=""> Maçã quantidade </label>
        <input ref={macaRef} type='text' 
        value={qntdMaca} 
        onChange={(e) => setQntdMaca(e.target.value)}>
            </input>
      

        <label htmlFor=""> Laranja quantidade</label>
        <input type="text" ref={laranjaRef}
        value={qntdLaranja}
        onChange={(e) => setQntdLaranja(e.target.value)}/>

        <label htmlFor=""> Bergamota quantidade</label>
        <input type="text" 
        value={qntdBergamota}
        onChange={(e) => setQntdBergamota(e.target.value)}/>

        <label htmlFor=""> Banana quantidade</label>
        <input type="text" 
        value={qntdBanana}
        onChange={(e) => setQntdBanana(e.target.value)}/>

        <label htmlFor=""> Pera quantidade</label>
        <input type="text" ref={peraRef}
        value={qntdPera}
        onChange={(e) => setQntdPera(e.target.value)}/>
        <br />
        <button onClick={Trajeto}>Cálculo final</button> {resultado && <p> O total da sua compra foi de {resultado} </p>}

    </div>
  )
}

export default TrajetoPomar