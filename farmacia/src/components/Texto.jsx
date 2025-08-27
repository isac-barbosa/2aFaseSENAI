import './Texto.css'

function Texto(props) {
  return (
    <div className='texto-container'>
        <p>
          {props.textocriado}
          {console.log(props)}
        </p>
    </div>
  )
}

export default Texto