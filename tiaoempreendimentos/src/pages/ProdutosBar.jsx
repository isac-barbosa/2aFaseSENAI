import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContexts'


function ProdutosBar() {
    const{produtosBar} = useContext(GlobalContext)
  return (
    <div>
        <Navbar/>
        <h2>Produtos do Bar</h2>
        {produtosBar.map((p) => (
            <ul className=''>
                <li key={p.id}>
                {p.nome} {p.valor}R$
                </li>
                </ul>
        ))}
        <h2>Localização</h2>
       
        </div>
  )
}

export default ProdutosBar