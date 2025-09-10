import React, { useState } from 'react'
import './Inicial.css'

function Inicial() {

    const[inputUsername, setInputUsername] = useState('')
    const[inputSenha, setInputSenha] = useState('')

  return (
    
    <div className='perimetro-container'>
        <h2> inputs </h2>
        <label htmlFor="">Username</label>
        <input type="text"
            value = {inputUsername}
            onChange = {(event) => setInputUsername(event.target.value)}
        />
        <label htmlFor="">Senha</label>
        <input type="password"
            value = {inputSenha}
            onChange = {(event) => setInputSenha(event.target.value)}
    
        />
    </div>
  )
}

export default Inicial