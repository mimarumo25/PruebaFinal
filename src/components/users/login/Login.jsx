import { Formik } from 'formik';
import React from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginEmailPassword, loginFacebook, loginGoogle } from '../../../actions/loginAction'


const Login = () => {

    const dispatch = useDispatch()

    const handleLoginGoogle = () => {

        dispatch(loginGoogle())

    }
    const handleLoginFacebook = () => {
        dispatch(loginFacebook())
    }
    return (

        <div>
            <div className="contenedorCards d-flex justify-content-center mt-5">
                <Link to="/">
                    
                </Link>
            </div>
            <div className="contenedorCards d-flex justify-content-center mt-5">

                <Card className="card " style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title> Iniciar sesión </Card.Title>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}

                            validate={(valores) => {
                                let errores = {}
                                //Validación Email
                                if (!valores.email) {
                                    errores.email = "Por favor Ingresa un Correo Electronico";
                                }
                                else if (
                                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                                        valores.email
                                    )
                                ) {
                                    errores.email = "Por favor Ingresa un Correo Electronico Valido";
                                }
                                if (!valores.password) {
                                    errores.password = "Por favor Ingresa tu contraseña";
                                }
                                else if (
                                    !/^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\ | \ [\]]{6,50}$/.test(
                                        valores.password
                                    )
                                ) {
                                    errores.password = "Por favor Ingresa una Contraseña valida, minimo 6 caracteres y mayusculas y minusculas";
                                }
                                return errores;

                            }}
                            onSubmit={(valores, { resetForm }) => {
                                // setenvioformulario(true)
                                dispatch(loginEmailPassword(valores.email, valores.password))
                                resetForm()
                                console.log(valores)
                                
                            }}>
                            {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                                <Form onSubmit={handleSubmit}> 
                                    <FloatingLabel
                                        controlId="email"
                                        label="Email address"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="email"
                                            placeholder="name@example.com"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.email && errors.email && (
                                            <div className="danger">{errors.email}</div>
                                        )}
                                    </FloatingLabel>
                                    <FloatingLabel controlId="password" label="Password" name="email">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password" 
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            />
                                            {touched.password && errors.password && (
                                            <div className="danger">{errors.password}</div>
                                        )}
                                    </FloatingLabel>
                                    <div className="d-flex justify-content-center mt-2">
                                        <div onClick={() => handleLoginGoogle()} className="poiter">
                                            <span
                                                className="iconify py-2 "
                                                data-icon="flat-color-icons:google"
                                                data-width="50">
                                            </span>
                                        </div>
                                        <div onClick={() => handleLoginFacebook()} className="poiter">
                                            <span
                                                className="iconify py-2 pe"
                                                data-icon="logos:facebook"
                                                data-width="50">

                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 mt-3">
                                        <button
                                            className="botoInicioS form-control"
                                            type="submit"
                                        >
                                            Iniciar Sesión
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <div className="mt-3">¿Si aun no tiene una cuenta?, puede registrase en el siguente link <Link to="/register"><span className="btn btn-secondary mx-2">Registrarme</span></Link></div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Login;
