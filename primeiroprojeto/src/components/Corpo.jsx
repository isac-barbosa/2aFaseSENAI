import './Corpo.css'
import Textao from './Textao'
import Texto from './Texto'
import Titulo from './Titulo'
import Titulo2 from './Titulo2'

function Corpo() {
  return (
    <div className="corpo-container">
        <Titulo />
        <Titulo2  texto={"Primeiro pedaço de página"}/>
        <Texto />
        <Titulo2  texto = {"Segundo pedaço de página"} emoji = {"😖"}/>
        <Textao />

            
    </div>
  )
}

export default Corpo