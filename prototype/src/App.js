
// -------------------- Imports --------------------

// Basico
import React from 'react';
import { Helmet } from 'react-helmet';

// Navegacion
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

// Componentes
import MenuNav from './components/menuNav';
// import InicioSesion from './components/formInicioSesion';

// Sitios web
import Inicio from './components/inicio';             // ---- Pagina de inicio
import IniciarSesion from './components/iniciar_sesion';    // ---- Iniciar sesión (cuenta existente)
import Contacto from './components/contacto';        // ---- Pagina para contactar (redes sociales)
import Compra from './components/compra';             // ---- Comprar (para el cliente)


// -------------------- App --------------------

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>HEB Titulo APP</title>
      </Helmet>
      <Router>
        <MenuNav />
        <div className="App-content" style={{ paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/IniciarSesion" element={<IniciarSesion />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Compra/:id" element={<Compra />} />
            <Route path="/Compra/" element={<Navigate to="/IniciarSesion" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
