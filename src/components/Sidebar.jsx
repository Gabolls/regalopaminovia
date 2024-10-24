import React from 'react'
import cerraricon from '../assets/cerrar.svg'


export default function Sidebar() {
  
     const cerrarsidebar = () =>{
        document.getElementById('sidebar').classList.toggle('closed')
        document.getElementById('sidebar').classList.toggle('open')
     }
  
  
    return (
        <div id='sidebar' className='closed'>
            <div className='sidebarcontent'>
            <button onClick={cerrarsidebar} id='cerrarsidebar'><img src={cerraricon} alt="" /></button>
            <div>
                <ul className='listita'>
                    <li><a href="#inicio">INICIO 🏠</a></li>
                    <li><a href="#momentos">MOMENTOS 🥰</a></li>
                    <li><a href="#fotos"> FOTITOS 📸</a></li>
                </ul>
                </div>
            </div>
        
    </div>
  )

  

        
}
