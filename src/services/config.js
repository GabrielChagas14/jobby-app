import axios from 'axios'

 const http = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('job_token');

        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`
            };
        }
        return config;
    });

export default http;