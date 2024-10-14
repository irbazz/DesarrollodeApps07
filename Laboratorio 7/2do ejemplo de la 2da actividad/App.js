import React, { useState } from "react";
import { UsuarioContexto } from "./UsuarioContexto";
import Componente1 from './Componentes/Componente1';


function App() {
  const [usuario, setUsuario] = useState("nuevo usuario :) ");

  return (
    <UsuarioContexto.Provider value={usuario}>
      <div>
        <h1 style = {{color: 'rgba(255, 95, 71, 0.5)' }}>{`¡Hola y bienvenido ${usuario}!`}</h1>
        <Componente1 />
      </div>
    </UsuarioContexto.Provider>
  );
}

export default App;

