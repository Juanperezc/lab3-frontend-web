import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import data from '../UsersData'
import columns from './columns'


const userTable = ()=>( 
    <ReactTable data= { data } 
                columns = { columns }
                className = "striped"
     />)

export default userTable;
