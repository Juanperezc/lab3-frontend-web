import axios from './axiosInstance';

class CategoryService {
    
    static getAll(){
        return axios.get('/api/categorys')
    }

    static save(data){

    	return axios.post('/api/categorys',data)
    }

    static update(data){
    	return axios.put(`/api/categorys/${data._id}`, data)
    }

    static delete(id){
    	return axios.delete(`/api/categorys/${id}`);
    }
}
export default CategoryService;