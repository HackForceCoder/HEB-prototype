// ------------------------ Imports ------------------------
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/HEB_red_logo.png";
import { Button, Form, Input, Menu, message } from 'antd';
import { LockOutlined, UserOutlined, HomeOutlined, UserAddOutlined, LoginOutlined, MessageOutlined } from '@ant-design/icons';



// ------------------------ Menu (Navigation Bar) ------------------------
function MenuNav() {
    const items = [
        { label: 'Pagina de inicio', key: 'pagina-inicio', icon: <HomeOutlined />, link: '/', },
        { label: 'Iniciar sesión', key: 'inicio-sesion', icon: <LoginOutlined />, link: '/inicio-sesion', },
        { label: 'Registrarse', key: 'registro', icon: <UserAddOutlined />, link: '/registro', },
        { label: 'Chat', key: 'chat', icon: <MessageOutlined />, link: '/chat', },
    ];

    return (
        <Menu mode="horizontal" style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#fff', zIndex: 1000 }}>
            <Menu.Item key="logo" style={{ paddingRight: '10px', paddingLeft: '20px', paddingTop: '10px', paddingBottom: '0px' }}>
                <img src={logo} alt="Black Logo" height={50} width={300} style={{ paddingBottom: '0px' }} />
            </Menu.Item>
            {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon} style={{ paddingLeft: '80px', paddingBottom: '0px', color: 'black', fontSize: 18 }}>
                    <Link to={item.link}>{item.label}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};



// ------------------------ Export default ------------------------
export default MenuNav;
