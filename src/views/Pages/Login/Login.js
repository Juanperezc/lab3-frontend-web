import React, { Component } from 'react';
import { CardGroup, Col,  Container, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom'

//Components
import FormLogin from './FormLogin';
import SignUp from './SignUp';
import ModalLogin from './ModalLogin'; 

//servicios
import userService from '../../../services/userService'


class Login extends Component {

  constructor(props){
      super(props);

      this.state = {
        email : '',
        password : '',
        redirect : false,
        modal: false
      }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect from="/" to="/dashboard" />
    }
  }

  handleOnChangeEmail = (event)=>{

      const email = event.target.value;
      this.setState({ email })
  } 

  handleOnChangePass = (event)=>{

    const password = event.target.value;
    this.setState({ password })
  }  

  handeOnClickLogin = ()=>{    

    const cond = this.state.email.trim().length > 0 && this.state.password.trim().length;
    /*let msj = cond ? 'Bienvenido '.concat(this.state.username) :
              'Error debe ingresar el username y el password';*/
    if(cond){

       const data = {
        "email": this.state.email,
        "password" : this.state.password
       }

       userService.login(data)
        .then(res=> {console.log(res.data);
                      this.setState({
                      redirect: true
                    })
        })
        .catch(err=>{
            console.error(err);
            this.toggleModal();
        })
    }
  }

  toggleModal = ()=>{
    this.setState({ modal: !this.state.modal })
  }

  showModal = ()=>{

    const modal = this.state.modal ? 
      
      <ModalLogin 
        modal = { this.state.modal }
        toggleModal = { this.toggleModal }
        className = {'modal-danger danger' }
        title = "Error de Autenticación"
        body= "Email o contraseña invalidos"
      /> 
      : null;

      return modal;
  }

  render() {

    return (
      <div className="app flex-row align-items-center">
        
        { this.showModal() }

        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <FormLogin 
                  email = { this.state.email }
                  changeEmail = { this.handleOnChangeEmail }
                  pass = { this.state.password }
                  changePass= { this.handleOnChangePass }
                  clickLogin= { this.handeOnClickLogin } 
                />

                { this.renderRedirect() }

                <SignUp />

              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;