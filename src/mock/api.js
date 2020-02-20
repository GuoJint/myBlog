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