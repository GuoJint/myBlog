<template>
    <div class="articleListShow">
        <div class="container">
            <div class="content">
                <el-card class="box-card" v-for="(item,index) in articleList" :key="index">
                    <div slot="header" class="clearfix">
                        <span>{{item.username}}</span>
                        <h3>{{item.title}}</h3>
                        <el-button style="float: right; padding: 3px 0" type="text">>></el-button>
                    </div>
                    <div class="article" >
                        {{item.article}}
                    </div>
                    <div class="bottom" >
                        <time class="time">{{item.time}}</time>
                        <div class="interactive">
                            <span class="good icon iconfont icondianzan3">{{item.good}}</span>
                            <span class="watched el-icon-view">{{item.watched}}</span>
                            <span class="comment el-icon-chat-dot-square">{{item.comment}}</span>
                        </div>
                    </div>
                </el-card>
            </div>
            
            
        </div>
        <el-pagination
            class="pagination"
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="totalSize">
        </el-pagination>
    </div>
</template>

<script>
import { articleListRequest } from '../api/articleShow'
export default {
    name: 'articleListShow',
    data() { 
        return {
            articleList:[],
            totalSize:0,
            pageSize:0
        }
    },
    created(){
        this.getArticleList()
    },
    mounted(){
        // window.addEventListener('scroll',this.rightFixed(),false)
    },
    computed: {
    },
    methods:{
        // rightFixed(){
        //     let rightTop = document.documentElement.scrollTop
        //     console.log(rightTop)
        //     console.log(document.documentElement)
        //     if(rightTop == 70){
        //         let right = document.getElementById('right')
        //         right.style.position = 'fixed'
        //         right.style.left = '60%'

        //     }
            
        // },
        getArticleList(){
            //初始化加载时接受总共条目数以及一页的条目数
            //在参数中传入page数，后端返回对应page数的内容
            articleListRequest().then( res => {
                this.articleList = res.data.articleList
                this.totalSize = res.total
                this.pageSize = res.pageSize
                console.log(this.articleList)
            })
        },
        toEdit(){
            this.$router.push('/articleEdit')
            console.log('xx')
        }
    }
}
</script>
<style lang="scss">
.articleListShow{
    width: 100%;
    .container{
        position: relative;
        overflow-y: hidden;
        width: 58%;
        // height: 200px;s
        margin: 0 auto;
        display: flex;
        
        .content{
            width: 75%;
            
            .box-card{
                margin-top:20px; 
                .clearfix{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .article{
                    overflow: hidden;
                    max-height: 65px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp:3;
                }
                .bottom{
                    font-size: 14px;
                    margin-top: 13px;
                    line-height: 12px;
                    .time {
                        color: #999;
                    }
                    .interactive{
                        float: right;
                        span{
                            width: 60px;
                            margin-right: 10px;
                            color: #409EFF;
                            &::before{
                                margin-right: 3px;
                                color: #909399;
                            }
                            &::after{
                                content:'|';
                                margin: 0 0 0 5px;
                                color: #909399;
                            }
                            &:hover{
                                cursor: pointer;
                            }
                        }
                        .good{
                            font-size: 14px;
                        }
                        .comment::after{
                            content:'';
                        }
                    }
                }
            }
        }
        
    }
    .pagination{
        width: 40%;
        margin: 20px auto;
    }
}
</style>