import React, {useState} from 'react'

export const Componente1 = () => {

const [nombre, setNombre] = useState ("Gabo")

  //let nombre = "Gabo";
let web = "google.com";


let cursos = [

    "hola",
    "chao",
    "como estas",
];

const cambiarNombre = (nuevoNombre) => {
  setNombre(nuevoNombre)
}


  return (
    <>
    
    <div>componente1</div>
    <p>mi nombre es <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
    <p>mi web es {web}</p>

    <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder='cambia el nombre' />

    <button onClick={e => cambiarNombre("gabriel Bollinger")}>
      cambiar nombre
      </button>
    
    <h2>cusrsos:</h2>
    <ul>
      {
      cursos.map( (curso, indice) => {
        return (<li key={indice}>
          {curso}
        </li>)
      })
}
    </ul>
    
    </>
  )
}
