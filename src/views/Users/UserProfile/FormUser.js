import React from 'react'
import {
    Col,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

const formUser = ({ user })=>(

    <React.Fragment>
        <FormGroup row className="my-0">
            <Col xs="6">
                <FormGroup>
                    <Label htmlFor="full_name"> Nombre </Label>
                    <Input type="text" id="full_name" value={ user.full_name } disabled />
                </FormGroup>
                                        
            </Col>
            <Col xs="6">
                <FormGroup>
                    <Label htmlFor="alias">Alias</Label>
                    <Input type="text" id="alias" value={ user.alias } disabled />
                </FormGroup>
            </Col>
        </FormGroup>
        <FormGroup row className="my-0">
            <Col xs="6">
                <FormGroup>
                    <Label htmlFor="tlf"> Telefono </Label>
                    <Input type="text" id="tlf" value={ user.phone } disabled />
                </FormGroup>
                
            </Col>
            <Col xs="6">
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="text" id="email" value={ user.email } disabled />
                </FormGroup>
            </Col>
        </FormGroup>
        <FormGroup row className="my-0">
            <Col xs="6">
                <FormGroup>
                    <Label htmlFor="country">País</Label>
                    <Input type="text" id="country" disabled value={ user.country } />
                </FormGroup>
            </Col>
            <Col xs="6">
                <FormGroup>
                    <Label htmlFor="city">Ciudad</Label>
                    <Input type="text" id="city" value={ user.city } disabled/>
                </FormGroup>
            </Col>
        </FormGroup>
        <FormGroup row className="my-0">
            <Col xs="6">
                <FormGroup>
                    <Label htmlFor="rol">Rol</Label>
                    <Input type="text" id="rol" disabled value={ user.rol } />
                </FormGroup>
            </Col>
            <Col xs="6">
                <FormGroup>
                    <Label htmlFor="status">Estatus</Label>
                    <Input type="text" id="status" value={ user.status } disabled/>
                </FormGroup>
            </Col>
        </FormGroup>
    </React.Fragment>
)

export default formUser;