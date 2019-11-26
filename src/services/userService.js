import axios from './axiosInstance'

class UserService{

    constructor(){
        console.log('userService instance');
    }

    login = (data)=>{
        return axios.post('/api/auth/login', data);
    }

    list(){
    	return axios.get('/api/users')
    }

    banned(id){
        return axios.put(`/api/user/banned/${id}`);
    }

    getUser = (id)=>{
        return axios.get(`/api/profile/${id}`);
    }
}

const userService = new UserService()

export default userService;