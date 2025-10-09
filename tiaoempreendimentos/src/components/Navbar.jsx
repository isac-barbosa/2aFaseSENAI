import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
  <div>
    
    <nav className='navbar-container'>
      <a href="https://www.google.com/maps/place/Rod.+Jos%C3%A9+Carlos+Daux,+3728+-+Saco+Grande,+Florian%C3%B3polis+-+SC,+88032-005/@-27.5483845,-48.4991164,3a,75y,43.33h,83.87t/data=!3m7!1e1!3m5!1sFF1TMg7fapLns7V1yQF2gA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D6.129626171665791%26panoid%3DFF1TMg7fapLns7V1yQF2gA%26yaw%3D43.333424731862415!7i16384!8i8192!4m14!1m7!3m6!1s0x9527475e01a8efef:0x5b0f13adab8483ec!2sSENAI+Florian%C3%B3polis+(CTAI)!8m2!3d-27.5482241!4d-48.4990945!16s%2Fg%2F1q5bvpp_7!3m5!1s0x95274760ad9ab111:0xdc6748c4ce50ab02!8m2!3d-27.5482734!4d-48.4993661!16s%2Fg%2F11fjzx7n5h?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D" target='blank'> <img src="./img/mapa.svg" alt="" /></a>
        <Link  className = 'links' to = {'/'}> Home</Link>
        <Link className = 'links' to = {'/produtosBar'}> Bar</Link>
        <Link className = 'links' to = {'/produtosSorveteria'}> Sorveteria</Link>
        <Link className = 'links' to = {'/servicosBorracharia'}> Serviços Borracharia</Link>

    </nav>
  </div>
  )
}

export default Navbar
