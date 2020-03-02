import axios from "./index"

export const articleListRequest = ()=>{
    return axios.request({
        url:'/articleListShow',
        method:'get',
    })
}