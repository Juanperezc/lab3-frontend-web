import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

const container = (props)=>(
    <div>
          <div className="animated fadeIn">
            <Row>
              <Col xl={12}>
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Usuarios <small className="text-muted">Listado</small>
                  </CardHeader>
                  <CardBody>
                     
                        { props.children }

                  </CardBody>
                </Card>
              </Col>
            </Row>
        </div>
        
      </div>
)

export default container;