var Mock = require('mockjs')

var Random =  Mock.Random

Mock.setup({
    timeout: '400-800'
})

Mock.mock('/api/login',{
    data:{
        token:Random.string('number',6),
    }
})
Mock.mock('/api/register/code',{
    data:{
        message:'验证码已发送'
    }
})
Mock.mock('/api/register',{
    data:{
        message:'注册成功'
    }
})