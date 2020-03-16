<template>
    <div class="articleEdit">
        <div class="container">
            <div class="centerLeft">
                <span class="logo">MyBlog</span>
                <span class="title">编辑</span>
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
export default {
    name: 'articleEdit',
    data() { 
        return {

        }
    }
}
</script>
<style lang="scss">
.articleEdit{
    width: 100%;
    height: 60px;
    background-color: #409EFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    .container{
        position:absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 1000px;
        height: 60px;
        background-color: #409EFF;
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
                span{
                    margin: 0;
                }
            }
            span{
                margin-left: 10px;
            }
        }
        .centerLeft{
            span{
                text-align: center;
                line-height: 60px;
                padding: 20px 10px;
            }
            .logo{
                background-color: #ECE6E6;
                color: #409EFF;
            }
            .title{
                color: #ECE6E6;
            }
        }
    }
}
</style>