import axios from "./index"

export const articleListRequest = ()=>{
    return axios.request({
        url:'/articleListShow',
        method:'get',
    })
}
export const searchAryRequest = (queryString)=>{
    return axios.request({
        url:'/searchAry',
        method:'post',
        Data:{
            queryString,
        }
    })
}