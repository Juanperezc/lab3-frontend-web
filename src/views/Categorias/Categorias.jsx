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

deleteCategoria = (key)=>{

	const categorias =  this.state.categorias.slice();
	let idx = 0;

	while(categorias[idx].id !== key)
			idx++;

	categorias.splice(idx,1);

	this.setState({
		categorias : categorias
	})
}

	render(){
		return(
			<CategoriasTable delete = { this.deleteCategoria } categorias = { this.state.categorias } />
		)
	}
} 
