import React from 'react'

//Components
import CategoriasTable from './CategoriasTable';

//Data
import categorias from './data';

export default class Categorias extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			categorias : categorias
		}
	}


	render(){
		return(
			<CategoriasTable categorias = { this.state.categorias } />
		)
	}
} 
