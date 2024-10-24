import React from 'react'
//import brocoli from '../assets/brocoligaby.jpg';
import divinas from '../assets/divinas.jpg';
import fotofavo from '../assets/fotofavorita.jpg';
//import fotomocanu from '../assets/fotomocanu.jpg';
//import fotopizarra from '../assets/fotopizarra.jpg';
//import fotosims from '../assets/gabysims.jpg';
//import fotolosdos from '../assets/gabyyyo.jpg';
import kuchau from '../assets/kuchaugaby.jpg';
//import ojitos from '../assets/ojitos.jpg';
import pijamas from '../assets/pijamas de pero.jpg';
//import primerafoto from '../assets/primerafoto.jpg';

export default function Compmomentos() {
  return (
    <div>
        
        <div id='momentos'>

            <div><h1 className='titulomomentos'>MOMENTOS</h1></div>
            <div className='momentos'>

            <div class="div1"><div className='mnj1'>Gracias por cada momento</div> </div>
            <div class="div2"><img src={divinas} alt="" /></div>

            <div class="div3">Realmente para mi en nuestra relacion para mi no existen momentos malos</div>
            <div class="div4"><img src={fotofavo} alt="" /></div>
            <div class="div5">Para mi solo esxisten momentos de los cuales se aprende, sin importar si estamos molestos, tristes, etc.</div>
            <div class="div6"><img src={kuchau} alt="" /></div>
            <div class="div7">Al igual que para mi no existe tal cosa como malas fotos o fotos feas, soloexisten recuerdos; recuerdos de los momentos que pasamos juntos, TAMO con locura mi princesa.</div>
            <div class="div8"><img src={pijamas} alt="" /></div>
            </div>
        </div>


    </div>
  )
}
