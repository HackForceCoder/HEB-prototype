
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
import home from './components/inicio';             // ---- Pagina de inicio
import login from './components/iniciar_sesion';    // ---- Iniciar sesión (cuenta existente)
import contact from './components/contacto';        // ---- Pagina para contactar (redes sociales)
import shop from './components/compra';             // ---- Comprar (para el cliente)


// -------------------- App --------------------

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>HEB Titulo</title>
      </Helmet>
      <Router>
        <MenuNav />
        <div className="App-content" style={{ paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={<home />} />
            <Route path="/login" element={<login />} />
            <Route path="/shop/:id" element={<shop />} />
            <Route path="/shop/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
