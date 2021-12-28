import {http} from './config'

export default {

    listar:() => {
        return http.get('user')
    },
    register:(user)=>{
        return http.post('user', user)
    }

}