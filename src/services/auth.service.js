import {http} from './config'

export default {

    login:(data) => {
        return http.post('login', data)
    },
    logout:()=>{
        return http.post('v1/logout')
    },
    me:()=>{
        return http.post('v1/me')
    },
    refresh:()=>{
        return http.post('v1/refresh')
    }

}