import React from "react"
import Widget from '../../Widgets/Widget03'
import {
    Card,
    CardBody,
    CardHeader,
    Col, 
} from 'reactstrap';

import {  Line } from 'react-chartjs-2';
import { makeSocialBoxData, socialChartOpts } from './makeSocialBoxData';
import FormUser from './FormUser'
import Spinner from '../../Base/Spinner/spinner';
import { alertError } from '../../Notifications/Alerts/SweetAlert'

import userService from '../../../services/userService';

class User extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            user : {alias: '' , photo: ''},
            dataBox : { 
                variant: 'twitter',
                Seguidores: '973k',
                Seguidos: '1.792',
                 publicaciones: '1200'
            },
            loading : true
        }
    }

    componentDidMount(){
           const id = this.props.match.params.id

        if(id)
            userService.getUser(id)
                .then(resp=>{
                    const user = resp.data.user

                    if(user){
                        this.setState({ user })
                        this.setDataBox()
                    }
                     else
                        this.msjError()
                })
                .catch(err=>{
                    console.error(err);
                    this.msjError()
                })
                .finally(()=> { this.setState( { loading: false }) })
    }

    followers = ()=>{
        return this.state.user.followers.length
    }
    
    following = ()=>{
        return this.state.user.following.length
    }

    publications = ()=>{
        return this.state.user.publications.length
    }

    setDataBox = () =>{
      this.setState({ dataBox : { 
                variant: 'twitter', 
                Seguidores:  this.followers() ,
                Seguidos: this.following(),
                publicaciones: this.publications()
      }})
        
    }

    msjError(){
        alertError('Oops' , 'Error al Buscar el usuario' )
        this.props.history.push('/users');   
    }

    render(){

        const body = this.state.loading ? 
            <Spinner loading = { true } /> :
            <Col xs={12} >
                <Widget 
                    dataBox={() => ( this.state.dataBox )} 
                    alias = { this.state.user.alias }
                    photo = { this.state.user.photo }
                >
                    <div className="chart-wrapper">
                        <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
                    </div>
                </Widget>
            
                <Card>
                    <CardHeader>
                        <strong>Perfil</strong>
                    </CardHeader>

                    <CardBody>
                        <FormUser user = { this.state.user } />
                    </CardBody>
                </Card>
             </Col>
        
        return(
           <div className="text-center">
                
                { body }
           
           </div>
   
        )
    }
}

export default User;