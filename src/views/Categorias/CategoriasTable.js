import React from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

//components
import CategoriaRow from './CategoriaRow';




const CategoriasTable = (props)=>(

    <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Listado de Categorias <small className="text-muted"> </small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">nombre</th>
                      <th scope="col">estatus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.categorias.map((categoria, index) =>
                      <CategoriaRow key={index} categoria={categoria}/>
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