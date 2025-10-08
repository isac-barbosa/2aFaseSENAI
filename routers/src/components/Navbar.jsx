import React from 'react'
import './Navbar.css'
import{ Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav-container'>                                  
        <Link className='links' to={'/'}>Home Page </Link> 
        <Link  className='links' to={'/pagina1'}>Pagina1 </Link> 
        <Link className='links' to={'/pagina2'}>Pagina2 </Link> 
        <Link className='links' to={'/pagina3'}>Pagina3 </Link> 
        <Link className='links' to={'/produtos'}>Produtos </Link> 
    </nav>
  )
}

export default Navbar