import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import ConfigStorage from '../../services/storage/config.store';
import { AppAsideToggler, AppSidebarToggler } from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
   
   constructor(props){
     super(props);

     this.state = {
       imagen: '../../assets/img/avatars/6.jpg',
       username: ''
     }
   }

componentDidMount(){
  const user = JSON.parse(ConfigStorage.getUser());
  
  if(user)
     this.setState({
        imagen: user.photo,
        username : user.full_name
      })
}

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
       
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">Usuarios</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/categorias" className="nav-link">Categorias</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">  <i className="cui-user icons font-2xl i-block mt-2"/> </NavLink>
          </NavItem>
          <NavItem>  { this.state.username } </NavItem>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={ this.state.imagen } className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Cuenta</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Notificaciones<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Mensajes<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comentarios<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Configuración</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Perfil</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Configuraciones</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Salir</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
