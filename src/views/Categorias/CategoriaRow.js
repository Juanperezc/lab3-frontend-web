import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';


const CategoriaRow = (props) => {
  
  const categoria = props.categoria
  const categoriaLink = `/categoria/${categoria.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={categoria.id.toString()}>
      <th scope="row"><Link to={categoriaLink}>{categoria.id}</Link></th>
      <td><Link to={categoriaLink}>{categoria.nombre}</Link></td>
      <td><Link to={categoriaLink}><Badge color={getBadge(categoria.status)}>{categoria.status}</Badge></Link></td>
    </tr>
  )
}

export default CategoriaRow;