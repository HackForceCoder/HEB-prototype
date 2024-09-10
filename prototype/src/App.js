
// -------------------- Imports --------------------

// Basics
import React from 'react';

// Navigation
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

// Components
import home from './components/home';       // ---- Pagina de inicio
import login from './components/login';     // ---- Iniciar sesión (cuenta existente)
import shop from './components/shop';       // ---- Comprar (para el cliente)


// -------------------- App --------------------

function App(){
    return (
        <div className="App">
          <Router>
            <AntDesign.MenuNav/>
            <div className="App-content" style={{ paddingTop: '64px' }}>
              <Routes>
                <Route path="/" element={<home />} />
                <Route path="/login" element={<login/>} />
                <Route path="/shop/:id" element={<shop />} />
                <Route path="/shop/" element={<Navigate to="/login" />} />
              </Routes>
            </div>
          </Router>
        </div>
    );
}

export default App;







/* Original React webpage

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pookie lebron 2.0
        </a>
      </header>
    </div>
  );
}

export default App;
*/
