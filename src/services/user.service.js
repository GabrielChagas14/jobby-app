import http from './config'

export default {

    index:() => {
        return http.get('v1/user')
    },
    store:(user)=>{
        return http.post('v1/user', user)
    }

}