import React, { useEffect, useState } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { listProductAsync, carritoP, carritoUdapte } from '../actions/actionProduct'
import { logout } from '../actions/loginAction'
import { useForm } from '../hooks/useForm'
import '../styles/main.css'

export default function Home() {
    let total = 0;
    let subtotal = 0;
    let item = 0

    const { product } = useSelector((store) => store.product);
    const { carrito } = useSelector((state) => state.carrito);
    const navigate = useNavigate();


    const dispatch = useDispatch()
    const [values, handleInputChange] = useForm({
        cant: 1
    });
    carrito?.forEach(dat => {
        subtotal = dat.price * dat.items;
        total += subtotal;
        item += dat.items

    });
    const { cant } = values;

    useEffect(() => {
        dispatch(listProductAsync())
    }, [])

    const handlechange = (e) => {
        const activo = e.target.checked;

        if (activo) {
            let id = e.target.id
            const prodAdd = product.ingredients.find(p => p.product === id)
            dispatch(carritoP(prodAdd))

        } else {
            console.log("No esta activo");
            let id = e.target.id
            const proUpdate = carrito.filter(pm => pm.product !== id)
            dispatch(carritoUdapte(proUpdate))
        }
    }
    const handleCompra = () => {
        Swal.fire({
            title: 'Gracias Por Su compra',
            confirmButtonText: 'cerrar',

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Gracias!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Que tenga buen dia', '', 'info')
            }
        })
    }
    const handelSelectTodos = () => {

        const check = document.getElementsByName("cant")
        check.setAttribute("checked", true);
    }
    const handelDesTodos = () => {
        alert("dest")
    }
    const handleLoging = ()=>{
        dispatch(logout());
        navigate("/")
    }
    return (
        <div>

            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <form className="container-fluid justify-content-start">
                        <button className="btn btn-outline-success me-2" type="button" onClick={handleLoging}>Cerrar Session</button>
                    </form>
                </nav>
                <div className="w-50 m-auto pt-5">
                    <Card>
                        <Card.Header as="h6">Ingredientes <br />
                            <b className='h4'>{product?.name}</b>
                        </Card.Header>
                        <Card.Body>

                            <div>
                                <h5 className='textoSelect text-center'><b className='select' onClick={handelSelectTodos}>Seleccionar todo</b><span className='h4 m-1'>|</span><b className='select' onClick={handelDesTodos}>Deseleccionar todo</b></h5>
                            </div>
                            <div>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.ingredients ? (product.ingredients.map((p, i) => (
                                            <tr >
                                                <td className='w-25'>
                                                    <div className='d-flex justify-content-around'>

                                                        <input
                                                            type="checkbox"
                                                            className='m-4 form-check-input'
                                                            name='productCheck'
                                                            id={p.product}
                                                            onChange={handlechange}
                                                        />
                                                        <div className='col-2 w-50'>
                                                            <input type="number"
                                                                className='form-control mt-3 text-center'
                                                                min="1"
                                                                checked='true'
                                                                name={cant}
                                                                value={cant}
                                                                onChange={handleInputChange} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='w-100 d-flex justify-content-between'>
                                                    <div>
                                                        <h6><b>{p.product}</b></h6>
                                                        <div className='lineado'>
                                                            <small className='marca'>{p.brand}</small><br />
                                                            <small>{p.quantity}</small>
                                                        </div>
                                                    </div>
                                                    <div className='price'><h5>{`${product.currency} ${p.price}`}</h5></div>
                                                </td>
                                            </tr>
                                        )))
                                            : (<div>Cargando...</div>)
                                        }
                                    </tbody>
                                </Table>
                                <div className='mt-5'>
                                    <div className='container'>

                                        <div className=''>
                                            <p>Cantidad: {item}</p>
                                        </div>
                                        <div className='py-1 d-flex justify-content-between'>
                                            <p>Subtotal: </p>
                                            <h5>{subtotal}</h5>
                                        </div>
                                        <div className='py-1 d-flex justify-content-between'>
                                            <p>Costos de envio:</p>
                                            {carrito.length > 0 ? <h5>$7.00</h5> : <h5>$0</h5>}
                                        </div>
                                        <div className='py-1 d-flex justify-content-between'>
                                            <h4>Total:</h4>
                                            {carrito.length > 0 ? <h5>$ {total + 7.00}</h5> : <h5>$0</h5>}
                                        </div>
                                        <div className="d-grid gap-2 col-7 mx-auto">
                                            {carrito.length > 0 ?
                                                <button className="btn btn-success" type="button" onClick={handleCompra}>Comprar Ingredientes:$ {total + 7.00}</button > :
                                                <button className="btn btn-success" type="button">Comprar Ingredientes:$ {0}</button>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
