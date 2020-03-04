<template>
    <div class="NavHeader">
        <div class="container">
            <div class="centerLeft">
                <span :class="HomeActive" @click="toHome">首页</span>
                <span :class="BlogActive" @click="toMyBlog">我的博客</span>
                <span :class="AtActive" @click="toMyAttention">我的关注</span>
            </div>
            <div class="centerRight">
                <el-autocomplete
                    class="inline-input"
                    prefix-icon="el-icon-search"
                    v-model="state"
                    :fetch-suggestions="querySearch"
                    placeholder = "请输入内容"
                    :trigger-on-focus = "false"
                    @select="handleSelect"
                ></el-autocomplete>
                <span>我的中心</span>
                <span>消息提示</span>
            </div>
        </div>
    </div>
</template>

<script>
import { searchAryRequest } from '../api/articleShow'
export default {
    name: 'NavHeader',
    data() { 
        return {
            nowRouterPath:this.$route.name,
            HomeActive:"active",
            BlogActive:"none",
            AtActive:"none",
            state:'',
            searchAry:[]
        }
    },
    methods:{
        //在querySearch参数中传入关键字，和callback，并在函数中把关键字传给后端并接受后端传回来的数据
        querySearch(queryString,cb) {
            let results = []
            searchAryRequest({queryString}).then( res =>{
                this.searchAry = res.data
                results =this.searchAry.filter(this.createFilter(queryString));
                // 调用 callback 返回建议列表的数据
                cb(results);
            })
        },
        //接受到后端的数据后进行和关键字的配对
        createFilter(queryString) {
            return (item) => {
                console.log(queryString.toLowerCase())
                //如果匹配成功则为0否则为-1
                return (item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        },
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
    position: fixed;
    z-index: 10;
    .container{
        width: 1000px;
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
            .inline-input{
                margin-right: 15px;
                input{
                    height: 30px;
                }
            }
        }
    }
}
</style>