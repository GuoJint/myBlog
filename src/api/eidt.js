import axios from './index'

export const saveRequest = (textHTML) =>{
    return axios.request({
        url:'/editHome/articleEdit',
        method:'post',
        data:{
            textHTML
        }
    })
}