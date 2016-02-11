import React from 'react'
import { Card, Button, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

//components
import CategoriaRow from './CategoriaRow';




const CategoriasTable = (props)=>(

    <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Listado de Categorias <small className="text-muted"> </small>
                 <Button onClick = { props.add } className= "float-right" color="primary">Agregar</Button>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">nombre</th>
                      <th scope="col">estatus</th>
                      <th scope="col"> Eliminar</th>

                    </tr>
                  </thead>
                  <tbody>
                    {props.categorias.map((categoria, index) =>
                      <CategoriaRow 
                        key={categoria._id} 
                        edit= {()=> props.edit(categoria._id) } 
                        categoria={categoria}
                        delete = { props.delete }
                        index={ index }/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
)

export default CategoriasTable;