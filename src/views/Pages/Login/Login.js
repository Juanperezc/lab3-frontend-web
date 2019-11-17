import React, { Component } from 'react';
import { CardGroup, Col,  Container, Row } from 'reactstrap';

//Components
import FormLogin from './FormLogin';
import SignUp from './SignUp';
import ModalLogin from './ModalLogin'; 
import Spinner from '../../Base/Spinner/spinner';
import { alertInfo } from '../../Notifications/Alerts/SweetAlert'

//servicios
import userService from '../../../services/userService'
import ConfigStorage from '../../../services/storage/config.store'

class Login extends Component {

  constructor(props){
      super(props);

      this.state = {
        email : '',
        password : '',
        modal: false,
        loading : false
      }

  }

  componentDidMount(){
    if(ConfigStorage.getToken())
      this.props.history.push("/dashboard");
    
      const a = new URLSearchParams(this.props.location.search);
      console.log("exp:", a.get("exp"))

      if(a.get("exp")){
        alertInfo('Sesión Expirada!','Inicie Sesión para continuar')
        window.location.hash = "#/login"
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

    /* {
    "email": "juanl1996@hotmail.com",
    "password" : "2514182657"
    }*/

    this.setState({ loading: true })

    const cond = this.state.email.trim().length > 0 && this.state.password.trim().length;
   
    if(cond){
       const data = {
        "email": this.state.email,
        "password" : this.state.password
       }

       userService.login(data)
        .then(res=> {
                      ConfigStorage.setToken(res.data.access_token.token);
                      ConfigStorage.setUser(res.data.user);
                      this.props.history.push('/dashboard');                 
        })
        .catch(err=>{
            console.error(err);
            this.toggleModal();

        }).finally(()=>{
          this.setState({ loading: false });
        })
    }
  }

  toggleModal = ()=>{
    this.setState({ modal: !this.state.modal })
  }

  showModal = ()=> {

    const modal = this.state.modal ? 
      
      <ModalLogin 
        modal = { this.state.modal }
        toggleModal = { this.toggleModal }
        className = "modal-danger danger"
        title = "Error de Autenticación"
        body= "Email o contraseña invalidos"
      /> 
      : null;

      return modal;
  }

  render() {

    const body = this.state.loading ? 
      <Spinner loading = { this.state.loading } /> :
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

                <SignUp />

              </CardGroup>
            </Col>
          </Row>
        </Container>

    return (
      <div className="app flex-row align-items-center">
        
        { this.showModal() }
         
         { body }
      
      </div>
    );
  }
}

export default Login;