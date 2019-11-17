import React from 'react'
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';

const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
}

    const columns = [
        {
            Header: 'id',
            accessor: 'id', // String-based value accessors!
            maxWidth: 50
        },
        {
            Header: 'Nombre',
            accessor: 'name', // String-based value accessors!
            filterable:  true,
            Cell: props => <Link to={ `/users/${props.row.id }`} > { props.value }  {  console.log(props) }</Link>
        }, 
        {
            Header: 'Registrado desde',
            accessor: 'registered',
           //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        },
        {
            //id: 'Rol', // Required because our accessor is not a string
            Header: 'Rol',
            accessor: 'role' //d => d.friend.name // Custom value accessors!
        },
        {
        Header: 'Estatus', //props => <span>Friend Age</span>, // Custom header components!
        accessor: 'status',
        Cell: props => <Badge color={ getBadge(props.value) }>{ props.value }</Badge>

    }]

export default columns;