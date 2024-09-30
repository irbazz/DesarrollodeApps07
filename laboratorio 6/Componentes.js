import React  from 'react';
import './Componentes.css'; // Importamos estilos

function Contenido(props) {
  return <h1 className="Contenido">Componenetes de la experiencia 3 - {props.curso}</h1>;
}

function Lista_Temas(props) {
    const cursos = ['html', 'React', 'JavaScript', 'CSS'];
    return (
      <ul className="lista"> 
        {cursos.map((curso, index) => (
          <li key={index}>{curso}</li>
        ))}
      </ul>
    );
}

function Componentes(props) {
  return (
    <div>
      <Contenido curso={props.curso}/>
      <Lista_Temas/>
    </div>
  );
}

export default Componentes;
