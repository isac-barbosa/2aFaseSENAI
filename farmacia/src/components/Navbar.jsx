import './Navbar.css'

function Navbar(){
    return(
        <div className='navbar-container'>
           <h4>
             <img src = "./img/farmarcia-logo-pq.PNG.png" height= "100" className='icon-container'/>
             FARMÁCIA 
            </h4>
           <a className ="navbar-text" href=""><img src="./img/home.svg" className='icon-container' />HOME</a>
           <a className ="navbar-text" href=""><img src="./img/sobre.svg" className='icon-container' />SOBRE</a>
           <a  className ="navbar-text" href=""><img src="./img/contact.svg" className='icon-container' />CONTATO</a>
            
            
           

        </div>


    )
}

export default Navbar