import axios from 'axios'
 //'http://127.0.0.1:3333'

const axiosInstance = axios.create({
    baseURL: 'http://157.56.176.217',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default axiosInstance