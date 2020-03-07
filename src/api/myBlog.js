import axios from './index'

export const myBlogRequest = ()=>{
    return axios.request({
        url:'/myBlog',
        method:'get',
        params:{
            //可以根据token来判断
            userID
        }
    })
}