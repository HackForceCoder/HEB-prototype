import React from 'react';
import logo from '../images/red_white_logo.png';

const Productos = () => {
    return (
        <div className="App-content">
            <h1 style={{ paddingTop: '64px' }}>Productos</h1>
            <br></br>
            <img src={logo} alt='logo' width='40%'></img>
        </div>
    );
};

export default Productos;