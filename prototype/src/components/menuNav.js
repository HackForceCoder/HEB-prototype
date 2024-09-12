// ------------------------ Imports ------------------------
// Basico
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Imagenes
import logo from "../images/red_white_logo.png";

// Ant Design
import { Menu, Input } from 'antd';
import { HomeOutlined, UserAddOutlined, LoginOutlined } from '@ant-design/icons';   // Iconos
const { Search } = Input;   // Busqueda de productos

// ------------------------ Menu (Barra de navegacion superior) ------------------------
function MenuNav() {

    const navigate = useNavigate();                         // Navegar al buscar productos
    const [prod, cambiaProd] = useState('');                // Actualizar busqueda (useState con producto)

    const items = [
        { type: 'Logo', },
        { label: 'Página de inicio', key: 'inicio', icon: <HomeOutlined />, link: '/', },
        { type: 'Busqueda', },   // Item para búsqueda de productos
        { label: 'Iniciar sesión', key: 'iniciar_sesion', icon: <LoginOutlined />, link: '/IniciarSesion', },
        { label: 'Contacto', key: 'contacto', icon: <UserAddOutlined />, link: '/Contacto', },
        {},
    ];

    // Accion de busqueda
    const buscarProductos = (value) => {
        navigate(`/productos/${value}`);    // Cambiar vista a busqueda de producto en específico
        setTimeout(20);
        cambiaProd('');
    };

    return (
        <Menu
            mode="horizontal"
            style={{
                display: 'flex',
                justifyContent: 'space-around',     // Distribute space between items
                alignItems: 'center',               // Center items vertically
                backgroundColor: '#fff',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                padding: '0 10px 0 0',                  // Reduce left/right padding
            }}
        >
            {items.map((item) => {

                // Revisar si el item es el logo
                if (item.type === 'Logo') {
                    return (
                        <Menu.Item key="Logo" style={{ padding: '0 0 0 0', marginBottom: 0 }}>
                            <img src={logo} alt="HEB red Logo" height={60} width={120} />
                        </Menu.Item>
                    );
                }

                // Revisar si el item es la barra de busqueda de productos
                if (item.type === 'Busqueda') {
                    return (
                        <Menu.Item key="Busqueda" style={{ padding: '20px 0 0 0', fontSize: 25 }}>
                            <Search
                                placeholder="Buscar productos"
                                style={{ fontSize: 25 }}
                                // loading={loadings[0]} onClick={() => enterLoading(0)} for buttons, not search/input
                                // find loading when pressing enter / clicking search
                                enterButton
                                value={prod}
                                onChange={(e) => cambiaProd(e.target.value)}
                                onSearch={buscarProductos}  // Funcion ejecutada al presionar enter y/o click en buscar
                            />
                        </Menu.Item>
                    );
                }
                // Render the other regular items
                return (
                    <Menu.Item key={item.key} icon={item.icon} style={{ padding: '0 10px', fontSize: 18 }}>
                        <Link to={item.link}>{item.label}</Link>
                    </Menu.Item>
                );

            })}
        </Menu>
    );
};


// ------------------------ Export default ------------------------
export default MenuNav;
