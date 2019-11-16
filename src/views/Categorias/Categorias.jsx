import React from 'react'

//Components
import CategoriasTable from './CategoriasTable';
import CategoriaModal from './CategoriaModal';

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

componentDidMount(){

	CategoryService.getAll()
		.then(res =>{
			const categorias = res.data.categorias;
			this.setState({ categorias })
			//categorias.forEach(x=>console.log(x))
		})		
		.catch(err=>{console.error(err)})
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

	CategoryService.delete(key)
		.then(resp=>{
			console.log(resp)
			const categoria = resp.data.category;
			const idx = this.buscarCategoria(categoria._id);
			
			const categorias = this.state.categorias.slice();
			categorias.splice(idx,1);

			this.setState({ categorias })

		})
		.catch(err=> console.error(err))

	/*const categorias =  this.state.categorias.slice();
	let idx = this.buscarCategoria(key);

	categorias.splice(idx,1);

	this.setState({
		categorias : categorias	
	})*/
}


toggleModal = ()=> {

	if(this.state.modal)
		this.setState({
		categoria : {id: 0 , name: '', status:'Active'}
	})

    this.setState({
      modal: !this.state.modal,
    });

  }

handleOnSubmitForm = (event)=>{

	event.preventDefault();
	let form = event.target;
	let categoria;
	console.log(form.id)
	
	if(parseInt(form.id.value) === 0){
	  categoria = { name : form.nombre.value , status : 'Active'};

	 CategoryService.save(categoria)
	 	.then(res=>{
	 		 console.log(res.data)
	 		 const categorias = this.state.categorias.concat(res.data.category);
	 		 this.setState({ categorias })

	 		})
	 	.catch(err=>{ console.error(err)})

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
			})
			.catch(err=>{console.error(err)})
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
