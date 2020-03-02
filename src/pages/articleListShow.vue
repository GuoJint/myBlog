<template>
    <div class="articleListShow">
        <div class="container">
            <div class="content">
                <el-card class="box-card" v-for="(item,index) in articleList" :key="index">
                    <div slot="header" class="clearfix">
                        <span>{{item.title}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text">>></el-button>
                    </div>
                    <div>
                        {{item.article}}
                    </div>
                </el-card>
            </div>
            <el-pagination
                class="pagination"
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="totalSize">
            </el-pagination>
        </div>
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
    computed: {
    },
    methods:{
        getArticleList(){
            //初始化加载时接受总共条目数以及一页的条目数
            //在参数中传入page数，后端返回对应page数的内容
            articleListRequest().then( res => {
                this.articleList = res.data.articleList
                this.totalSize = res.total
                this.pageSize = res.pageSize
                console.log(this.articleList)
            })
        }
    }
}
</script>
<style lang="scss">
.articleListShow{
    width: 100%;
    .container{
        overflow-y: hidden;
        width: 1208px;
        // height: 200px;s
        margin: 0 auto;
        .pagination{
            width: 40%;
            margin: 0 auto;
        }
    }
}
</style>