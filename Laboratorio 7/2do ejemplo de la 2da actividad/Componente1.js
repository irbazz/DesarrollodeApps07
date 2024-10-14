import React from "react";
import Componente2 from "./Componente2";

function Componente1() {
  return (
    <div>
      <h2 style = {{color: 'rgba(64, 224, 208, 1)' }}>Componente 1</h2>
      <p>Este es el Componente 1 </p>

      <p>
        En este componente tenemos:  
        <a href="https://www.ucsm.edu.pe/precatolica/precatolica-2024-iii/" target="_blank" rel="noopener noreferrer">
           Página de la universidad
        </a>
      </p>

      <Componente2 />
    </div>
  );
}

export default Componente1;
