import React, { useState } from 'react';
import './MasComponentes.css'; // Importamos estilos

function Contenido(props) {
  return <h1 className='contenido'>Mas datos<br />
  {props.datos}</h1>;
}

function Lista_Datos(props) {
    const cursos = ['Nombre', 'Codigo', 'Año'];
    return (
      <ul className="lista"> 
        {cursos.map((curso, index) => (
          <li key={index}>{curso}</li>
        ))}
      </ul>
    );
}

function MensajeBoton() {
    const [mensaje, setMensaje] = useState('');
  
    const mostrarMensaje = () => {
      setMensaje('gracias por dar click'); // Cambia el mensaje cuando se hace clic
    };
  
    return (
      <div className="mensaje-boton">
        <p>{mensaje}</p>
        <button onClick={mostrarMensaje}>Haz click aquí</button> {/* Botón para mostrar el mensaje */}
      </div>
    );
  }


function MasComponentes(props) {
  return (
    <div>
      <Contenido datos={props.datos}/>
      <Lista_Datos/>
      <MensajeBoton />
    </div>
  );
}

export default MasComponentes;
