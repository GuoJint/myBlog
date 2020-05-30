<template>
    <div class="NavHeader">
        <div class="container">
            <div class="centerLeft">
                <div :class="HomeActive" @click="toHome" class="index">
                    <i class="index-icon iconfont">&#xe620;</i>
                    <div class="index-font">
                        <p >首页</p>
                    </div>
                </div>
                <div :class="BlogActive" @click="toMyBlog" class="index">
                    <i class="index-icon iconfont">&#xe63f;</i>
                    <div class="index-font">
                        <p >我的博客</p>
                    </div>
                </div>
                <div :class="AtActive" @click="toMyAttention" class="index">
                    <i class="index-icon iconfont">&#xe61e;</i>
                    <div class="index-font">
                        <p >我的关注</p>
                    </div>
                </div>
                <!-- <span :class="HomeActive" @click="toHome">首页</span>
                <span :class="BlogActive" @click="toMyBlog">我的博客</span>
                <span :class="AtActive" @click="toMyAttention">我的关注</span> -->
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    width: 100%;
    height: 60px;
    // background-color: #409EFF;
    background-image: linear-gradient(90deg,#93b5cf,#5cb3cc,#2e317c);
    background-size: 200%;
    animation: bganimation 15s infinite;
    position: fixed;
    z-index: 10;
    .container{
        position:absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 1000px;
        height: 60px;
        background-color: rgba(255, 255, 255, 0);
        span{
            margin-right:40px; 
        }
        span:hover{
            cursor: pointer;
        }
        .active{
            background-color: #ECE6E6;
            color: #409EFF;
            transition: all 0.3s;
            padding: 0 5px;
            .index-font{
                font-size: 13px !important;
                color: #409EFF !important;
            }
        }
        .centerRight{
            display: inline-block;
            line-height: 60px;
            color: #ECE6E6;
        }
        .centerLeft{
            position: absolute;
            top: 0;
            display: flex;
            .index{
                width: 70px;
                height: 60px;
                margin-right: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: all 1s ease;
                .index-icon{
                    color: RGB(0,132,255);  //颜色
                    font-size: 25px;
                }
                .index-icon:hover{
                    cursor: pointer;
                }
                .index-font{
                    color: RGB(0,132,255);
                    font-size: 0;
                    transition: all .5s ease;
                    
                }
            }
            .index:hover .index-font{
                cursor: pointer;
                color: RGB(0,132,255);
                font-size: 13px !important;
            }
            span{
                margin: 0;
            }
        }
        .centerRight{
            float: right;
            .inline-input{
                margin-right: 50px;
                input{
                    height: 30px;
                }
            }
        }
    }
}
@keyframes bganimation {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}
</style>