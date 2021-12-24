
import { Card, FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { registerEmailPassword } from '../../../actions/registerAction'


export const Register = () => {
    const dispatch = useDispatch()
    
    return (
        <div>
            <div className="contenedorCards d-flex justify-content-center mt-5">
                <Link to="/">
                    
                </Link>
            </div>
            <div className="contenedorCards d-flex justify-content-center mt-5">

                <Card className="card " style={{ width: '25rem' }}>

                    <Card.Body>
                        <Card.Title> Crear Cuenta </Card.Title>
                        <Formik
                            initialValues={{
                                names: '',
                                email: '',
                                password: '',
                                repitPassword: ''
                            }}

                            validate={(valores) => {
                                let errores = {};
                                if (!valores.names) {
                                    errores.names = "Por favor Ingresa un nombre";
                                }
                                if (!valores.email) {
                                    errores.email = "Por favor Ingresa un Correo Electronico";
                                } else if (
                                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                                        valores.email
                                    )
                                ) {
                                    errores.email = "Por favor Ingresa un Correo Electronico Valido";
                                }
                                if (!valores.password) {
                                    errores.password = "Por favor Ingresa su Contraseña";
                                }
                                if (valores.password !== valores.repitPassword) {
                                    errores.repitPassword = "Las contraseñas deben ser iguales"
                                }
                                return errores;
                            }}

                            onSubmit={(valores, { resetForm }) => {
                                
                               dispatch(registerEmailPassword(valores.names, valores.email, valores.password))
                                resetForm()                               
                               
                                
                            }}>
                            {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (

                                <Form onSubmit={handleSubmit}>
                                    <FloatingLabel
                                        controlId="names"
                                        label="Tu Nombre"
                                        className="mb-1"
                                    >
                                        <Form.Control
                                            type="text"
                                            name="names"
                                            required
                                            value={values.names}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.names && errors.names && (
                                            <div className="danger">{errors.names}</div>
                                        )}

                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="email"
                                        label="Email"
                                        className="mb-1"
                                    >
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            required
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.email && errors.email && (
                                            <div className="danger">{errors.email}</div>
                                        )}

                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="password"
                                        label="Password"
                                        className="mb-1"
                                    >
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            required
                                            onChange={handleChange}
                                            value={values.password}
                                            onBlur={handleBlur}
                                        />
                                        {touched.password && errors.password && (
                                            <div className="danger">{errors.password}</div>
                                        )}
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="repitPassword"
                                        label="Confirmar Password"

                                    >
                                        <Form.Control
                                            type="password"
                                            name="repitPassword"
                                            required
                                            onChange={handleChange}
                                            value={values.repitPassword}
                                            onBlur={handleBlur}
                                        />
                                        {touched.repitPassword && errors.repitPassword && (
                                            <div className="danger">{errors.repitPassword}</div>
                                        )}
                                    </FloatingLabel>

                                    <div className="d-grid gap-2 mt-3">
                                        <button className="botoInicioS form-control" type="submit">
                                            Crear tu cuenta
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <p className="mt-3">
                            ¿Ya tienes una cuenta?
                            <Link to="/">
                                <span className="link mx-2">Iniciar sesión</span>
                            </Link>
                        </p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
