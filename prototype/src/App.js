
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
import Inicio from './components/inicio';                   // ---- Pagina de inicio
import IniciarSesion from './components/iniciar_sesion';    // ---- Iniciar sesión (cuenta existente)
import Contacto from './components/contacto';               // ---- Pagina para contactar (redes sociales)
import Comprar from './components/comprar';                 // ---- Comprar (para el cliente)


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
            <Route path="/inicio-sesion" element={<IniciarSesion />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos" element={<Comprar />} />
            <Route path="/productos/:nombre" element={<Comprar />} />
            <Route path="/carrito/" element={<Navigate to="/inicio-sesion" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
