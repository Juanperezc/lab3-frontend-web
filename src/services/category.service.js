import axios from './axiosInstance';

class CategoryService {
    
    static getAll(){
        return axios.get('/categorys')
    }

    static save(data){

    	return axios.post('/categorys',data)
    }

    static update(data){
    	return axios.put(`/categorys/${data._id}`, data)
    }

    static delete(id){
    	return axios.delete(`/categorys/${id}`);
    }
}
export default CategoryService;