import React from 'react'
import {
    Card,
    CardBody,
    Col,
  } from 'reactstrap'
import { Line } from 'react-chartjs-2';

const widget = (props)=>(
    
    <Col xs="12" sm="6" lg="3">
            <Card className={ props.className }>
              <CardBody className="pb-0">
                <div className="text-value">{ props.data }</div>
                <div>{ props.title }</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={ props.chartData } options={ props.chartOpc } height={70} />
              </div>
            </Card>
    </Col>
)
export default widget;