<template>
    <div class="NavHeader">
        <div class="container">
            <div class="centerLeft">
                <span :class="HomeActive" @click="toHome">首页</span>
                <span :class="BlogActive" @click="toMyBlog">我的博客</span>
                <span :class="AtActive" @click="toMyAttention">我的关注</span>
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
            HomeActive:"active",
            BlogActive:"none",
            AtActive:"none",
        }
    },
    methods:{
        toHome(){
            if(this.nowRouterPath  !== "articleShow"){
                this.$router.push("/articleShow")
                this.HomeActive = "active"
                this.BlogActive = "none"
                this.AtActive = "none"
                setTimeout(() => {
                    this.nowRouterPath = this.$route.name
                }, 100);
            }
        },
        toMyBlog(){
            if(this.nowRouterPath !== "myBlog"){
                this.$router.push("/myBlog")
                this.BlogActive = "active"
                this.AtActive = "none"
                this.HomeActive = "none"
                setTimeout(() => {
                    this.nowRouterPath = this.$route.name
                }, 100);
            }
            
            
        },
        toMyAttention(){
            if(this.nowRouterPath !== "myAttention"){
                this.$router.push("/myAttention")
                this.AtActive = "active"
                this.HomeActive = "none"
                this.BlogActive = "none"
                setTimeout(() => {
                    this.nowRouterPath = this.$route.name
                }, 100);
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
        .active{
            background-color: #ECE6E6;
            color: #409EFF;
            padding: 20px 10px;
            transition: all 0.3s
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