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
			modal : false,
			categoria : {id: 0 , nombre: '', status:'Active'}
		}
	}

buscarCategoria = (key)=>{

	let idx = 0;

	while(this.state.categorias[idx].id !== key) 
			idx++;

	return idx;
}


deleteCategoria = (key)=>{

	const categorias =  this.state.categorias.slice();
	let idx = this.buscarCategoria(key);

	categorias.splice(idx,1);

	this.setState({
		categorias : categorias	
	})
}


toggleModal = ()=> {

	if(this.state.modal)
		this.setState({
		categoria : {id: 0 , nombre: '', status:'Active'}
	})

    this.setState({
      modal: !this.state.modal,
    });

  }

handleOnSubmitForm = (event)=>{

	event.preventDefault();
	let form = event.target;
	let categoria;

	if(parseInt(form.id.value) === 0){

	  let id = this.state.categorias[this.state.categorias.length - 1].id + 1;
	  categoria = { id : id, nombre : form.nombre.value , status : 'Active'};

	  this.setState({ 
		categorias : this.state.categorias.concat(categoria)	
	  })

	}else{

		const categorias = this.state.categorias.slice();
		categoria = this.state.categoria;
		categorias[this.buscarCategoria(categoria.id)] = categoria;

		this.setState({
			categorias : categorias
		})
	}

	
	this.toggleModal();
	this.setState({
		categoria : {id: 0 , nombre: '', status:'Active'}
	})
}

editCategoria = (key)=>{

	let idx = this.buscarCategoria(key);

	this.setState({
		categoria: this.state.categorias[idx]
	})

	this.toggleModal()

}

habdleOnChangeCategoria = (event)=>{

	let nombre = event.target.value;

	const categoria = this.state.categoria;
	categoria.nombre = nombre

	this.setState({
		categoria : categoria
	})
}

	render(){
		return(
			<div>
				<CategoriasTable 
					delete = { this.deleteCategoria } 
					categorias = { this.state.categorias }
					add = { this.toggleModal }
					edit = { this.editCategoria }

				/>

				<CategoriaModal 
					toggleModal = { this.toggleModal }
					info = { this.state.modal }
					className = "info"
					submit = { this.handleOnSubmitForm }
					categoria = { this.state.categoria }
					change = { this.habdleOnChangeCategoria }
				/>
			
			</div>
		)
	}
} 
