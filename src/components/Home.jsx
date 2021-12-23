import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import '../styles/main.css'

export default function Home() {

    return (
        <div>
            <div className="container">
                <div className="w-50 m-auto pt-5">
                    <Card>
                        <Card.Header as="h6">Ingredientes <br />
                            <b className='h4'>Risotto de setas vegano</b>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <h5 className='textoSelect'><b className='select'>Seleccionar todo</b><span className='h4 m-1'>|</span><b className='select'>Deseleccionar todo</b></h5>
                            </div>
                            <div>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='w-25'>
                                                <div className='d-flex justify-content-around'>
                                                    <input type="checkbox" className='m-4 form-check-input' />
                                                    <div className='col-2 w-50'>
                                                        <input type="text" className='form-control mt-3 text-center' min="1" value={2} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='w-100 d-flex justify-content-between'>
                                                <div>
                                                    <h6><b>Nombre</b></h6>
                                                    <div className='lineado'>
                                                        <small className='marca'>Marca</small><br />
                                                        <small>x kg</small>
                                                    </div>
                                                </div>
                                                <div className='price'><h5>xxxx $$</h5></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
