import React from 'react';

function ClienteList({ clientes }) {
  return (
    <ul>
      {clientes.map((cliente, index) => (
        <li key={index}>
          {cliente.nombre} ({cliente.email})
        </li>
      ))}
    </ul>
  );
}

export default ClienteList;
