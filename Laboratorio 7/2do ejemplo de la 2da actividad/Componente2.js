import React from "react";
import Componente3 from "./Componente3";

function Componente2() {
  return (
    <div>
      <h2 style = {{color: 'rgba(100, 160, 230, 1)' }}>Componente 2</h2>
      <p>Este es el Componente 2 </p>

      <p>
        En este componente tenemos:  
        <a href="https://www.ucsm.edu.pe/aula-virtual/" target="_blank" rel="noopener noreferrer">
           Página del aula virtual de la universidad
        </a>
      </p>

      <Componente3 />
    </div>
  );
}

export default Componente2;
