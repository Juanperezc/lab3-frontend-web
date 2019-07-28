import React, { Component } from 'react';
import { CardGroup, Col,  Container, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom'

//Components
import FormLogin from './FormLogin';
import SignUp from './SignUp';

class Login extends Component {

  constructor(props){
      super(props);

      this.state = {
        username : '',
        password : '',
        redirect : false
      }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect from="/" to="/dashboard" />
    }
  }

  handleOnChangeUsername = (event)=>{

    let username = event.target.value;

      this.setState({
        username : username
      })
  } 

  handleOnChangePass = (event)=>{

    let pass = event.target.value;

      this.setState({
        password : pass
      })
  }  

  handeOnClickLogin = ()=>{

    let cond = this.state.username.trim().length > 0 && this.state.password.trim().length;
    let msj = cond ? 'Bienvenido '.concat(this.state.username) :
              'Error debe ingresar el username y el password';
    
    console.log(this.state.username, this.state.password);
    
    alert(msj)
    
    if(cond)
      this.setState({
        redirect : true
      })
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <FormLogin 
                  username = { this.state.username }
                  changeUsername = { this.handleOnChangeUsername }
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
