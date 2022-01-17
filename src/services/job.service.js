import http from './config';

export default {
    store: (data) =>{
        return http.post('v1/job', data)
    }
}