import React, { Component } from 'react';

import Container from './Container';
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
        const users = resp.data.users.slice();

        this.setState({ 
          users,
          loading : false 
        })
    })
    .catch(err=>{
      console.error(err)
    })
}

bannedUser = (id)=>{

  this.setState({ loading :true })

     usersServices.banned(id)
      .then(resp=>{
        const user = resp.data.user
        const users = this.state.users.slice()
        const i = users.findIndex( x => x._id === user._id)

        users[i] = user;
        this.setState({ users })

      })
      .catch(err=>{
        console.error(err);
      })
      .finally(()=> this.setState({loading: false }))
 
}

  render() {

    return(

      <Container>
          <UsersTable 
            loading = { this.state.loading }
            data = { this.state.users }
            banned = { this.bannedUser }
        />
      </Container>     
    )
  }
}

export default Users;
