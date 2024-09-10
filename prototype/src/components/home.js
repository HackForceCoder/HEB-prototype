import React from 'react';
import AntDesign from "./AntDesign.js"
import logo from '../images/HEB_red_logo.png';

const login = () => {
  return (
    <div className="App-content">
      <div style={{
        backgroundColor: '#0A0A0A', marginLeft: '30%', marginRight: '30%', minHeight: '300px',
        paddingTop: '2%', marginTop: '2%'
        }}>
        <img src={logo} alt='logo' width='40%'></img>
        <AntDesign.InicioSesion/>
      </div>
    </div>
  );
};

export default login;