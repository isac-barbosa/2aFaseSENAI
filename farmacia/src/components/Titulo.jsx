import './Titulo.css'
function Titulo(props){

    return(
      <div classname = 'titulo-container'>
        <h1>
            {props.titulo}
            {console.log(props)}
            
        </h1>
      </div>
        
    )
}
export default Titulo