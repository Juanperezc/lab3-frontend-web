import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import UsersTable from './UsersTable/UsersTable'

//Services
import usersServices from '../../services/userService.js'



class Users extends Component {

  constructor(props){
    super(props);
    
    this.state = {
        users : [],
        loading : true,
    }
  }

componentDidMount(){

  usersServices.list()
    .then(resp=>{
        console.log(resp.data)
        const users = resp.data.users;

        this.setState({ 
          users,
          loading : false 
        })

    })
    .catch(err=>{
      console.error(err)
    })
}


  render() {

    return(
      <div>
          <div className="animated fadeIn">
            <Row>
              <Col xl={12}>
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Usuarios <small className="text-muted">example</small>
                  </CardHeader>
                  <CardBody>
                      <UsersTable 
                        loading = { this.state.loading }
                        data = { this.state.users }
                       />
                  </CardBody>
                </Card>
              </Col>
            </Row>
        </div>
        
      </div>
    )
  }
}

export default Users;
