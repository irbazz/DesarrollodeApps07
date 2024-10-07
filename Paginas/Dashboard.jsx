import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

function Dashboard() {
  return (
    <div>
      <h2>Administración de Clientes</h2>
      <nav>
        <ul>
          <li><Link to="profile">Perfil de Cliente</Link></li>
          <li><Link to="settings">Configuraciones de Cliente</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
