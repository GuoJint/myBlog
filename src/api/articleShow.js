import axios from "./index"
//应该传递用户id
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
//应该传递文章id
export const commentListRequest = ()=>{
    return axios.request({
        url:'/commentList',
        method:'get',
    })
}
