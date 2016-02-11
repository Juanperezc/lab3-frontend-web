import axios from 'axios'
 //'http://127.0.0.1:3333'
//'http://157.56.176.217'

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default axiosInstance