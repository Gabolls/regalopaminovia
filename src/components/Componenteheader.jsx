import React from 'react'
import menuico from '../assets/Group 11.svg'
import homeico from '../assets/home.svg'




export const Componenteheader = () => {
  
  const sidebaropen = () => {
    document.getElementById('sidebar').classList.toggle('open')
    document.getElementById('sidebar').classList.toggle('closed')

  }
  
  return (
    <div id='cabeza'>
     

        <li id='home'><a href="#inicio"><img src={homeico} alt="" /></a></li>
        <li id='options'><button onClick={sidebaropen}><img src={menuico} alt=""  className='imagenoptions'/></button></li>
        

    
    </div>
  )
}
