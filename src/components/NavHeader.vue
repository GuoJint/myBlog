<template>
    <div class="NavHeader">
        <div class="container">
            <div class="centerLeft">
                <span @click="toHome">首页</span>
                <span>我的博客</span>
                <span>我的关注</span>
            </div>
            <div class="centerRight">
                <span>我的中心</span>
                <span>消息提示</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavHeader',
    data() { 
        return {
            nowRouterPath:this.$route.name,
        }
    },
    methods:{
        toHome(){
            console.log(this.nowRouterPath)
            if(this.nowRouterPath  !== "articleShow"){
                console.log("ss")
                this.$router.push("/articleShow")
            }
        }
    }
}
</script>
<style lang="scss">
.NavHeader{
    width: 100%;
    height: 60px;
    background-color: #409EFF;
    .container{
        width: 1208px;
        height: 60px;
        margin: 0 auto;
        background-color: #409EFF;
        span{
            margin-right:15px; 
        }
        span:hover{
            cursor: pointer;
        }
        .centerLeft,.centerRight{
            display: inline-block;
            line-height: 60px;
            color: #ECE6E6;
        }
        .centerRight{
            float: right;
        }
    }
}
</style>