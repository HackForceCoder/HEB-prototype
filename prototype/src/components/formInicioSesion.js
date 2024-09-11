// ------------------------ Imports ------------------------
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "C:/Users/Milan/Desktop/StudyHub/client/src/images/blackLogo.png";
import { Button, Form, Input, Menu, message } from 'antd';
import { LockOutlined, UserOutlined, HomeOutlined, UserAddOutlined, LoginOutlined, MessageOutlined } from '@ant-design/icons';


// ------------------------ InicioSesion (form for LogIn) ------------------------
const InicioSesion = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        //const userData = JSON.stringify({ email: values.correo, password: values.password });

        try {
            const response = await fetch('https://primaryai.000webhostapp.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                // Login successful
                message.success('Inicio de sesión exitoso');
                // Redirecting the user after a second
                setTimeout(() => { navigate(`/chat/${values.email}`); }, 1000);
            } else {
                // Login failed
                const data = await response.json();
                message.error(data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            message.error('Error durante el inicio de sesión');
        }
    };

    const isEmailValid = (email) => {
        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', marginTop: '10%', marginBottom: '0px' }}>
            <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish} style={{ width: '250px' }}>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su correo electrónico',
                        },
                        {
                            validator(_, value) {
                                if (!value || isEmailValid(value)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Por favor ingrese un correo electrónico válido'));
                            },
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su contraseña',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Contraseña"
                    />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <div className='button-container'>
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                                style={{
                                    width: '100%',
                                    minHeight: '45px',
                                    fontSize: '18px',
                                    color: '#fff',
                                }}
                            >
                                Iniciar sesión
                            </Button>
                        </div>

                    )}
                </Form.Item>
            </Form>
        </div>
    );
};


// ------------------------ Export default ------------------------
export default InicioSesion;
