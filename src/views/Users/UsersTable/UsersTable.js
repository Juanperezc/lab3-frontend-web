import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


import columns from './columns'


const userTable = (props)=>( 
    <ReactTable data= { props.data } 
                columns = { columns }
                className = "-striped text-center"
                loading = { props.loading }
                pageSize={ 10 }
                  
                getTdProps={(state, rowInfo, column) => {
				    return {
				      onClick: (e, handleOriginal) => {
				        if (handleOriginal)
				        	if(column.Header === "Acción")
				        		props.banned(rowInfo.original._id)
				     }	}
					}
				}
     />)

export default userTable;