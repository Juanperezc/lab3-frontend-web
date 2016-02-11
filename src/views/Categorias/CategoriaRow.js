import React from 'react';
import { Link } from 'react-router-dom';
import { Badge , Button } from 'reactstrap';


const CategoriaRow = (props) => {
  
  const categoria = props.categoria
  const categoriaLink = `/categoria/${categoria._id}`

  const getBadge = (status) => {
    return status === 'A' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={categoria._id.toString()}>
      <th scope="row"><Link onClick= { ()=> props.edit }>{ props.index}</Link></th>
      <td><Link onClick= { ()=> props.edit(categoria._id) } >{categoria.name}</Link></td>
      <td><Link to={categoriaLink}><Badge color={getBadge(categoria.status)}>{categoria.status}</Badge></Link></td>
      <td> <Button  size="sm" color="ghost-danger" onClick={ ()=> props.delete(categoria._id)} >
               <i className="cui-trash icons font-2xl d-block mt-2"></i>
            </Button>
      </td>
    </tr>
  )
}

export default CategoriaRow;