import React, { useContext } from "react";
import { UsuarioContexto } from "../UsuarioContexto";

function Componente3() {
  const usuario = useContext(UsuarioContexto);

  return (
    <div>
      <h2 style = {{color: 'rgba(153, 116, 230, 1)' }}>Componente 3</h2>
      <p>Este es el Componente 3 </p>

      <p>
        En este componente tenemos:  
        <a href="https://webapp.ucsm.edu.pe/sm/Views/login.php" target="_blank" rel="noopener noreferrer">
           Página del sistema de matricula
        </a>
      </p>

      <p>{`Espero que haya sido útil el contenido, ${usuario}!`}</p>

    </div>
  );
}

export default Componente3;
