import React from 'react';
import { Button, Card, CardBody, Col, Form,
        Input, InputGroup, InputGroupAddon,
        InputGroupText, Row } from 'reactstrap';

const FormLogin = (props)=>(

     <Card className="p-4">
        <CardBody>
            <Form>
                <h1>Login</h1>
                <p className="text-muted">Sign In to your account</p>
                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-user"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Username"
                           autoComplete="username" 
                           value= { props.username }
                           onChange={ props.changeUsername }
                    />
                </InputGroup>
                <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-lock"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type="password" placeholder="Password"
                              autoComplete="current-password"
                              onChange={ props.changePass }
                              value= { props.pass }
                    />
                </InputGroup>
                <Row>
                    <Col xs="6">
                        <Button color="primary"
                            onClick= { props.clickLogin }
                            className="px-4">Login
                           </Button>
                    </Col>
                    <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                    </Col>
                </Row>
            </Form>
         </CardBody>
    </Card>
);
export default FormLogin;