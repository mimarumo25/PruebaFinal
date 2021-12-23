import React from 'react'
import { Button, Card } from 'react-bootstrap'
import '../styles/main.css'

export default function Home() {
    return (
        <div>
            <div className="container">
                <div className="w-50 d-flex m-auto pt-5">
                <Card> 
                    <Card.Header as="h6">Ingredientes <br />
                    <b className='h4'>Risotto de setas vegano</b>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <h5 className='textoSelect'><b className='select'>Seleccionar todo</b><span className='h4'>|</span><b className='select'>Deseleccionar todo</b></h5>
                        </div>

                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}
