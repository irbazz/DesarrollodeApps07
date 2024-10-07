import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Paginas/Home';
import About from './Paginas/About';
import Dashboard from './Paginas/Dashboard';
import ClienteForm from './Componentes/ClienteForm';
import ClienteList from './Componentes/ClienteList';
import PrivateRoute from './PrivateRoute';
import './App.css'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [clientes, setClientes] = useState([]);

  const agregarCliente = (cliente) => {
    setClientes([...clientes, cliente]);
  };

  return (
    <Router>
      <Header title="Registro de Clientes" />
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/dashboard">Admin Clientes</Link></li>
          <li><Link to="/registro">Registro Cliente</Link></li>
          <li><Link to="/list">Lista de Clientes</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registro" element={<ClienteForm agregarCliente={agregarCliente} />} />
        <Route path="/list" element={<ClienteList clientes={clientes} />} />
        <Route path="/dashboard/*" element={<PrivateRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />} />
      </Routes>
      <Footer year="2024" />
    </Router>
  );
}

export default App;
