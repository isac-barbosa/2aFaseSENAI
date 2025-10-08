import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from './contexts/GlobalContext'

function Produtos() {
    const{produto, setProduto, produtos} = useContext(GlobalContext)

    function trocarProduto(){
        let novo = prompt("Novo nome: ")
        setProduto(novo)
    }
  return (

    <div>
        <Navbar/>
        <h1>Produtos</h1>
        produtos, produtos, 
        produtos, {produto}, {produtos[0].nome}, {produtos[1].nome}
        <button onClick={trocarProduto}>Trocar</button>
    </div>
  )
}

export default Produtos