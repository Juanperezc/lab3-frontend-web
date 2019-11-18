import React from 'react'

//Components
import CategoriasTable from './CategoriasTable';
import CategoriaModal from './CategoriaModal';
import { 
	alertSuccess,
	alertError,
	alertConfirm } from '../Notifications/Alerts/SweetAlert'

//Services
import CategoryService from '../../services/category.service';

export default class Categorias extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			categorias : [],
			modal : false,
			categoria : {_id: 0 , name: '', status:'Active'},
			spinner : true
		}
	}

setCategoria = ()=>{
	this.setState({
		categoria:  {_id: 0 , name: '', status:'Active'}
	})
}

componentDidMount(){

	CategoryService.getAll()
		.then(res =>{
			const categorias = res.data.categorias;
			this.setState({ categorias })
		})		
		.catch(err=>{
			console.error(err)
			alertError('Oops...', `No se pudieron cargar las categorías `)
		})
		.finally(()=> this.setState({ spinner: false }))

}

buscarCategoria = (id)=>{

	let i = 0;
	const size = this.state.categorias.length;
	
	while(this.state.categorias[i]._id !== id && i < size )
			i++

	return i;
}

deleteCategoria = (key)=>{

	alertConfirm( () =>{
		CategoryService.delete(key)
		.then(resp=>{
			console.log(resp)
			const categoria = resp.data.category;
			const idx = this.buscarCategoria(categoria._id);
			
			const categorias = this.state.categorias.slice();
			categorias.splice(idx,1);

			this.setState({ categorias })
			
			alertSuccess('Eliminación Exitosa!', `Se elimino ${ categoria.name } `)

		})
		.catch(err=> {
			console.error(err)
			alertError('Oops...', 'Error al Eliminar!')
		})
	})
}


toggleModal = ()=> {

	if(this.state.modal)
		this.setCategoria();

    this.setState({
      modal: !this.state.modal,
    });

  }

handleOnSubmitForm = (event)=>{

	event.preventDefault();
	const form = event.target;
	let categoria;

	if(parseInt(form.id.value) === 0){
	  categoria = { name : form.nombre.value , status : 'Active'};

	 CategoryService.save(categoria)
	 	.then(res=>{
	 		 console.log(res.data)
	 		 const categorias = this.state.categorias.concat(res.data.category);
			 this.setState({  categorias })
			 
			 alertSuccess("Inclusión Exitosa!",
			 	 `Se agrego la Categoría ${res.data.category.name} `) 
	 		})
			 .catch(err=>{
				console.error(err)
				alertError('Oops...', `Error al Incluir ${ categoria.name }`)
			})
	}else{
		const cat = { ...this.state.categoria }
		
		CategoryService.update(cat)
			.then(resp =>{
				console.log(resp.data);

				const categoria = resp.data.category;
				const idx = this.buscarCategoria(categoria._id);
				const categorias = this.state.categorias.slice();

				categorias[idx] = categoria
				this.setState({ categorias })
				alertSuccess('Exito!', `Se edito la Categoría ${ categoria.name }`)
			})
			.catch(err=>{
				console.error(err)
				alertError('Oops...', `Error al Editar ${ cat.name }`)
			})
	}

	this.toggleModal();
	this.setCategoria();
}

editCategoria = (key)=>{

	let idx = this.buscarCategoria(key);

	this.setState({
		categoria: this.state.categorias[idx]
	})
	this.toggleModal()
}

habdleOnChangeCategoria = (event)=>{

	const name = event.target.value;
	const categoria = { ...this.state.categoria, name };

	this.setState({ categoria })
}

	render(){
		return(
			<div>
				<CategoriasTable 
					delete = { this.deleteCategoria } 
					categorias = { this.state.categorias }
					add = { this.toggleModal }
					edit = { this.editCategoria }
					spinner = { this.state.spinner }
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