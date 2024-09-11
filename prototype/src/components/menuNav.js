// ------------------------ Imports ------------------------
// Basico
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Imagenes
import logo from "../images/red_white_logo.png";

// Ant Design
import { Menu, Input } from 'antd';
import { HomeOutlined, UserAddOutlined, LoginOutlined } from '@ant-design/icons';

// Busqueda de productos
const { Search } = Input;

// ------------------------ Menu (Barra de navegacion superior) ------------------------
function MenuNav() {

    const navigate = useNavigate();                         // Navegar al buscar productos
    const [searchQuery, setSearchQuery] = useState('');     // Actualizar busqueda (texto)

    const items = [
        { label: 'Pagina de inicio', key: 'inicio', icon: <HomeOutlined />, link: '/', },
        { label: 'Iniciar sesión', key: 'iniciar_sesion', icon: <LoginOutlined />, link: '/IniciarSesion', },
        { label: 'Contacto', key: 'contacto', icon: <UserAddOutlined />, link: '/Contacto', },
    ];

    // Accion de busqueda
    const buscarProductos = (value) => {
        // Do something with the search query, like navigating to a results page
        console.log('Buscando:', value);
        navigate(`/productos/${value}`); // Example: Navigate to a search results page
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '10px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="HEB red Logo" height={70} width={120} style={{ marginRight: '20px' }} />
            </div>
            <Menu mode="horizontal" style={{ flex: 1, display: 'flex', justifyContent: 'center', backgroundColor: '#fff', borderBottom: 'none' }}>
                
                {/* Barra de busqueda */}
                <Menu.Item key="search" style={{ padding: '0 20px', fontSize: 18 }}>
                    <Search
                        placeholder="Search products"
                        enterButton
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onSearch={buscarProductos} // This is triggered when Enter is pressed
                    />
                </Menu.Item>

                {/* Elementos en barra de navegacion */}
                {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon} style={{ padding: '0 20px', fontSize: 18 }}>
                        <Link to={item.link}>{item.label}</Link>
                    </Menu.Item>
                ))}
                
            </Menu>
        </div>
    );
};



// ------------------------ Export default ------------------------
export default MenuNav;
