import axios from './index'

export const sendCodeRequest = (mail)=>{
    return axios.request({
        url:'/user/getMailCode',
        method:'post',
        data:{
            mail
        }
    })
}
export const registerRequest = (user,psw,Mail,code)=>{
    return axios.request({
        url:'/user/reg',
        method:'post',
        data:{
            user,
            psw,
            Mail,
            code
        }
    })
} 