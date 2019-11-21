import React from 'react'
import { Link } from 'react-router-dom';
import { Badge, Button } from 'reactstrap';

const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
}

const getIcon = (status)=> {

    return  status === 'Banned' ? 'cui-circle-check h4' : 'cui-circle-x h4'
}

const getColor = (status)=>{
     return  status === 'Banned' ? 'ghost-success' : 'ghost-danger'
}

const columns = (banned)=>(

     [ 
        {
            Header: 'Icon',
            accessor: 'photo', // String-based value accessors!
            maxWidth: 70,
            className: 'text-center',
            Cell: props => (
                      <div className="avatar">
                        <img src={ props.value } className="img-avatar" alt={ props.value } />
                        <span className="avatar-status badge-success"></span>
                      </div>
            )
        },
        {
            Header: 'Nombre',
            accessor: 'full_name', // String-based value accessors!
            filterable:  true,
            Cell: props => <Link to={ `/app/users/${props.row._original._id }`} > { props.value } </Link>
        }, 
        {
            Header: 'Username',
            accessor: 'alias', // String-based value accessors!
            filterable:  true,
        },
        {
            Header: 'País',
            accessor: 'country', // String-based value accessors!
            filterable:  true,
        },

        {
            //id: 'Rol', // Required because our accessor is not a string
            Header: 'Rol',
            accessor: 'rol' //d => d.friend.name // Custom value accessors!
        },
        {
        Header: 'Estatus', //props => <span>Friend Age</span>, // Custom header components!
        accessor: 'status',
        maxWidth: 70,
        Cell: props => <Badge color={ getBadge(props.value) }>{ props.value }</Badge>
        },
        {
            Header: 'Acción',
            accessor: 'status', //d => d.friend.name // Custom value accessors!
            Cell: props => (
                <Button  size="sm" color={ getColor(props.value) } onClick={()=> banned(props.row._original._id) } >
                    <i className={`${ getIcon(props.value) } icons font-2sm d-block mt-2`}> </i>
                </Button>
            )
        },
    ]
)

export default columns;