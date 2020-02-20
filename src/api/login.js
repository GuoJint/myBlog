import axios from './index'
export const loginReuqest = (username,password)=>{
    return axios.request({
        url:'/login',
        method:'post',
        data:{
            username,
            password
        }
    })
}