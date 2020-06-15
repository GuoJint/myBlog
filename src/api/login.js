import axios from './index'
export const loginReuqest = (user,psw)=>{
    return axios.request({
        url:'/user/login',
        method:'post',
        data:{
            user,
            psw
        }
    })
}