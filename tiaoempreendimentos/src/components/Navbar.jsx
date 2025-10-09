import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='navbar-container'>
        <Link  className = 'links' to = {'/'}> Home</Link>
        <Link className = 'links' to = {'/produtosBar'}> Bar</Link>
        <Link className = 'links' to = {'/produtosSorveteria'}> Sorveteria</Link>
        <Link className = 'links' to = {'/servicosBorracharia'}> Serviços Borracharia</Link>

    </nav>
  )
}

export default Navbar