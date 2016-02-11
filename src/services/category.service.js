import axios from './axiosInstance';

class CategoryService {
    
    static getAll(){
        return axios.get('/categorys')
    }

    static save(data){

    	return axios.post('/categorys',data)
    }
}
export default CategoryService;