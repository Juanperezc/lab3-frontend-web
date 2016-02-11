import React from 'react';
import { Card,  CardBody,
		 Form, FormGroup, FormText,
		 Col, Label, Input,
		 Button, Modal, ModalBody, ModalFooter,
	 ModalHeader } from 'reactstrap';

const CategoriaModal = (props)=>(
    
     <Modal isOpen={props.info} toggle={ props.toggleModal }
            className={'modal-info ' + props.className }>
            <ModalHeader toggle={props.toggleModal }>Agregar Categoria</ModalHeader>
               <ModalBody>
                    <Card>	
		              <CardBody>
		                <Form onSubmit = { props.submit } method="post" className="form-horizontal">
		                  <FormGroup row>
		                    <Col md="3">
		                      <Label htmlFor="nombre">Nombre</Label>
		                    </Col>
		                    <Col xs="12" md="9">
		                      <Input type="text" id="nombre"
		                      		 value={ props.categoria.name }
		                      		 onChange = { props.change }
		                      		 name="nombre" placeholder="Ingrese el Nombre..."
		                      		  autoComplete="nombre" />
		                      <FormText className="help-block">Ingrese el nombre de la categoria</FormText>
		                    </Col>
		                  </FormGroup>
		                 
		                  <Input type="hidden" id="" name="id" value={ props.categoria._id } />
		                 
		                	<Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Guardar</Button>
		                	<Button type="reset" name="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Restablecer</Button>
		              
		                </Form>
		              </CardBody>

		              
            		</Card>
                </ModalBody>
                
                <ModalFooter>
                    <Button color="secondary" onClick={props.toggleModal}>Salir</Button>
                </ModalFooter>
     </Modal>   
);


export default CategoriaModal;
