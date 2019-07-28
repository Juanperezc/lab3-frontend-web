import React from 'react'

//Components
import CategoriasTable from './CategoriasTable';
import CategoriaModal from './CategoriaModal';

//Data
import categorias from './data';

export default class Categorias extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			categorias : categorias,
			modal : false
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


toggleModal = ()=> {
    this.setState({
      modal: !this.state.modal,
    });
  }

handleOnSubmitForm = (event)=>{

	event.preventDefault();
	let form = event.target;

	let nombre = form.nombre.value;
	let id =  this.state.categorias[this.state.categorias.length - 1].id + 1;

	let categoria = { id : id, nombre : nombre , status : 'Active'}
	
	this.setState({
		categorias : this.state.categorias.concat(categoria)	
	})

	form.nombre.value = '';
	
	this.toggleModal();
}

	render(){
		return(
			<div>
				<CategoriasTable 
					delete = { this.deleteCategoria } 
					categorias = { this.state.categorias }
					add = { this.toggleModal }
				/>

				<CategoriaModal 
					toggleModal = { this.toggleModal }
					info = { this.state.modal }
					className = "info"
					submit = { this.handleOnSubmitForm }
				/>
			
			</div>
		)
	}
} 
