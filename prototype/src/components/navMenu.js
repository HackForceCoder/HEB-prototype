// ------------------------ Imports ------------------------
// Basics
import React from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from "../images/red_white_logo.png";

// Ant Design
import { Menu } from 'antd';
import { HomeOutlined, UserAddOutlined, LoginOutlined } from '@ant-design/icons';



// ------------------------ Menu (Navigation Bar) ------------------------
function MenuNav() {
    const items = [
        { label: 'Pagina de inicio', key: 'home', icon: <HomeOutlined />, link: '/', },
        { label: 'Iniciar sesión', key: 'login', icon: <LoginOutlined />, link: '/inicio-sesion', },
        { label: 'Registrarse', key: 'shop', icon: <UserAddOutlined />, link: '/registro', },
    ];

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', position: 'fixed',
            top: 0, width: '100%', zIndex: 1000, padding: '10px 0'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="HEB red Logo" height={70} width={120} style={{ marginRight: '20px' }} />
            </div>
            <Menu mode="horizontal" style={{ flex: 1, display: 'flex', justifyContent: 'center', backgroundColor: '#fff', borderBottom: 'none' }}>
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
