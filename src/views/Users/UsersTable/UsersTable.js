import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


import columns from './columns'


const userTable = (props)=>( 
    <ReactTable data= { props.data } 
                columns = { columns }
                className = "striped text-center"
                loading = { props.loading }
                pageSize={ 10 }
     />)

export default userTable;