import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
        <a href=""> <img src = "./imagens/home.svg " className='icons-container'/>Home</a> 
        <a href=""> <img src = "./imagens/mdi--contact.svg " className='icons-container'/>Contato</a>
        <a href=""> <img src = "./imagens/dashboard1.svg " className='icons-container'/>Dashboard</a>
    </div>
  )
}

export default Navbar