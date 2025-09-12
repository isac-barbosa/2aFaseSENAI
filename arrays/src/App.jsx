import React from 'react'
import './App.css'
import { useState } from 'react'
function App() {
  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[senha, setSenha] = useState('')
  const[pessoas, setPessoas] = useState([
    {id: 1, nome: "Dona Bet", idade: 98},
    {id: 2, nome: "Dono Mirando", idade: 83},
    {id: 33, nome: "Jeanisvaldo", idade: 79},
    {id: 11, nome: "Glaucieniane", idade: 98},
    {id: 232, nome: "Binho", idade: 83},
    {id: 37, nome: "Jeanisvaldo", idade: 79},
    {id: 101, nome: "Dona Bet", idade: 98},
    {id: 2329, nome: "Dono Mirando", idade: 83},
    {id: 32, nome: "Jeanisvaldo", idade: 79},
  ])
    function cadastrar(){
      let pessoa = {
        id: Date.now(),
        nome: prompt("Nome"),
        idade: Number(prompt("Idade: ")),
      }
      console.log(pessoa);

      setPessoas([pessoa,...pessoas])
    }
  return (
    <div>
      <h1>Arrays</h1>
      <div className='formCadastro'>
      <label htmlFor="">Nome:</label>
      <input type="text" 
      value={nome}
      onChange={(e) => setNome(e.target.value)}/>
      <label htmlFor="">email:</label>
      <input type="text" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}/>
      <label htmlFor="">senha:</label>
      <input type="password" 
      value={senha}
      onChange={(e) => setSenha(e.target.value)}/>
      </div>
      <button onClick={cadastrar}>Cadastrar</button>
      <div className="container-cards">

      {pessoas.map((pessoa) => (
        <div key={pessoa.id} className='card-pessoa'>
          <h2>{pessoa.nome}</h2>
            <p>Idade: {pessoa.idade}</p>
          </div>
      ))}
      </div>
    </div>
  )
}

export default App
