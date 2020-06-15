<template>
    <div class="articleListShow">
        <div class="container">
            <div class="content">
                <el-card class="box-card" v-for="(item,index) in articleList" :key="index">
                    <div slot="header" class="clearfix">
                        <span>{{item.username}}</span>
                        <h3>{{item.title}}</h3>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="open(item.articleID)">>></el-button>
                    </div>
                    <div class="article" >
                        {{item.article}}
                    </div>
                    <div class="bottom" >
                        <time class="time">{{item.time}}</time>
                        <div class="interactive">
                            <!-- //item.isgood?'active':'' -->
                                <!-- <i class="good iconfont" :class="goodAmt" @click="goodAdd(index)">&#xe61f;</i>
                            <span >{{item.good}}</span> -->
                            <span class="watched el-icon-view">{{item.watched}}</span>
                        </div>
                    </div>
                    <el-dialog :title=item.title :visible.sync="item.detailShow">
                        <span>{{item.article}}</span>
                        <div class="detailFooter">
                            <button class="button" :class="liked" @click="likeClick(index)">
                                <div class="emitter"></div>
                                <div class="hand">
                                    <div class="thumb"></div>
                                </div>
                                <span>Like<span>d</span></span>
                            </button>
                            <span class="like">{{item.good}}</span>
                            <span class=" el-icon-chat-dot-square" :class="commentShow?'commentShow':''" @click="openComment">
                                <p class="commentText">Show</p>
                            </span>
                            <span class="commentNumber">{{item.comment}}</span>
                        </div>
                        <!-- 评论模块 -->
                        <div class="comment" v-if="commentShow">
                            <div v-for="(item,index) in commentList" :key="index">
                                <!-- <span>{{item.replyUser?`${item.replyUser} 回复 ${item.commentUser}`:item.commentUser}}</span> -->
                                <span><a v-if="item.replyUser">{{item.replyUser}} 回复 </a><a>{{item.commentUser}}</a>:</span>
                                <p>{{item.commentContext}}</p>
                            </div>
                            <div class="saySomeThing">
                                <input type="text" placeholder="SaySomeThing" maxlength=30 >
                                <button>提交</button>
                            </div>
                        </div>
                        
                    </el-dialog>
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
import { articleListRequest , commentListRequest} from '../api/articleShow'
export default {
    name: 'articleListShow',
    data() { 
        return {
            articleList:[],
            commentList:[],
            totalSize:0,
            pageSize:0,
            liked:'',
            commentShow:false
        }
    },
    created(){
        this.getArticleList() 

    },
    mounted(){},
    computed: {
    },
    methods:{
        //打开文章详情
        open(articleID){
            this.articleList.forEach(item=>{
                console.log(`${item.articleID}:::${articleID}`)
                if(item.articleID == articleID){
                    item.detailShow = true
                }
            })
        },
        openComment(){
            if(this.commentShow == false){
                this.commentShow = true
                commentListRequest()
                .then( res =>{
                    // console.log(res,this.commentShow)
                    this.commentList = res.data.commentList

                })
            }else{
                this.commentShow = false
            }
            
            
        },
        //点赞
        likeClick(index){
            if(this.liked == ''){
                this.liked = 'liked'
                this.articleList[index].good +=1
            }else{
                this.liked = ''
                this.articleList[index].good -=1
            }
        },
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
        //传入id从而来与后端进行互通,使用item.isgood的true/false来判断是否点赞,如果为true就为active
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

                        
                    }
                }
                .el-dialog{
                    .el-dialog__body{
                        font-size: 18px;
                    }
                    .detailFooter{
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        margin-top: 20px;
                        .button {
                            --color: #F6F8FF;
                            --color-hover: #F6F8FF;
                            --color-active: #fff;
                            --icon: #E1E6F9;
                            --icon-hover: #ECEFFC;
                            --icon-active: #fff;
                            --background: RGB(47,53,126);
                            --background-hover: RGB(81,147,184);
                            --background-active: RGB(81,167,255);
                            --shadow: #{rgba(#001177, .1)};
                            display: inline-block;
                            outline: none;
                            cursor: pointer;
                            position: relative;
                            border: 0;
                            background: none;
                            padding: 8px 20px 8px 24px;
                            border-radius: 9px;
                            line-height: 27px;
                            font-family: inherit;
                            font-weight: 600;
                            font-size: 14px;
                            color: var(--color);
                            -webkit-appearance: none;
                            -webkit-tap-highlight-color: transparent;
                            transition: color .2s linear;
                            &:hover {
                                --icon: var(--icon-hover);
                                --color: var(--color-hover);
                                --background: var(--background-hover);
                            }
                            &:active {
                                --scale: .95;
                            }
                            &:not(.liked) {
                                &:hover {
                                    --hand-rotate: 8deg;
                                    --hand-thumb-1: -12deg;
                                    --hand-thumb-2: 36deg;
                                }
                            }
                            &.liked {
                                --span-x: 2px;
                                --span-d-o: 1;
                                --span-d-x: 0;
                                --icon: var(--icon-active);
                                --color: var(--color-active);
                                --background: var(--background-active);
                                --hand-name: hand;
                            }
                            &:after {
                                content: '';
                                min-width: 103px;
                                position: absolute;
                                left: 0;
                                top: 0;
                                right: 0;
                                bottom: 0;
                                border-radius: inherit;
                                transition: background .2s linear, transform .2s, box-shadow .2s linear;
                                transform: scale(var(--scale, 1)) translateZ(0);
                                background: var(--background);
                                box-shadow: 0 4px 8px var(--shadow), 0 8px 20px var(--shadow);
                            }
                            .emitter {
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translateZ(-4px);
                                div {
                                    width: 6px;
                                    height: 6px;
                                    margin: -3px 0 0 -3px;
                                    border-radius: 2px;
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    transform-style: preserve-3d;
                                    background: var(--b, none);
                                }
                            }
                            .hand {
                                width: 11px;
                                height: 11px;
                                border-radius: 2px 0 0 0;
                                background: var(--icon);
                                margin: 10px 8px 0 0;
                                transform-origin: -5px -1px;
                                transition: transform .25s, background .2s linear;
                                transform: rotate(var(--hand-rotate, 0deg)) translateZ(0);
                                animation: var(--hand-name, none) .5s linear;
                                &:before,
                                &:after {
                                    content: '';
                                    background: var(--icon);
                                    position: absolute;
                                    transition: background .2s linear, box-shadow .2s linear;
                                }
                                &:before {
                                    left: -5px;
                                    bottom: 0;
                                    height: 12px;
                                    width: 4px;
                                    border-radius: 1px 1px 0 1px;
                                }
                                &:after {
                                    right: -3px;
                                    top: 0;
                                    width: 4px;
                                    height: 4px;
                                    border-radius: 0 2px 2px 0;
                                    background: var(--icon);
                                    box-shadow: -.5px 4px 0 var(--icon), -1px 8px 0 var(--icon), -1.5px 12px 0 var(--icon);
                                    transform: scaleY(.6825);
                                    transform-origin: 0 0;
                                }
                                .thumb {
                                    background: var(--icon);
                                    width: 10px;
                                    height: 4px;
                                    border-radius: 2px;
                                    transform-origin: 2px 2px;
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    transition: transform .25s, background .2s linear;
                                    transform: scale(.85) translateY(-.5px) rotate(var(--hand-thumb-1, -45deg)) translateZ(0);
                                    &:before {
                                        content: '';
                                        height: 4px;
                                        width: 7px;
                                        border-radius: 2px;
                                        transform-origin: 2px 2px;
                                        background: var(--icon);
                                        position: absolute;
                                        left: 7px;
                                        top: 0;
                                        transition: transform .25s, background .2s linear;
                                        transform: rotate(var(--hand-thumb-2, -45deg)) translateZ(0);
                                    }
                                }
                            }
                            .hand,
                            span {
                                z-index: 1;
                                position: relative;
                                display: inline-block;
                                vertical-align: top;
                                span {
                                    opacity: var(--span-d-o, 0);
                                    transition: transform .25s, opacity .2s linear;
                                    transform: translateX(var(--span-d-x, 4px)) translateZ(0);
                                }
                            }
                            & > span {
                                transition: transform .25s;
                                transform: translateX(var(--span-x, 4px)) translateZ(0);
                            }
                        }
                        @keyframes hand {
                            30% {
                                transform: rotate(-14deg) translateZ(0);
                            }
                            65% {
                                transform: rotate(7deg) translateZ(0);
                            }
                            100% {
                                transform: rotate(0deg) translateZ(0);
                            }
                        }
                        .like{
                            font-size: 20px;
                            margin: 0 10px 0 10px;
                        }
                        .commentShow{
                            background-color: RGB(81,167,255) !important;
                        }
                        .el-icon-chat-dot-square{
                            width: 100px;
                            height: 40px;
                            border-radius: 10px;
                            line-height: 40px;
                            text-align: center;
                            font-size: 17px;
                            background-color:  RGB(47,53,126);
                            transition: all 
                            0.4s;
                            // margin-right: 10px;
                            color: #409EFF;
                            .commentText{
                                display: inline-block;
                                position: relative;
                                top: -5px;
                                font-size: 14px;
                                font-weight: 700;
                                color: RGB(236,239,252);
                            }
                            &::before{
                                margin-right: 3px;
                                // margin-top: -10px;
                                font-size: 25px;
                                color: RGB(236,239,252);
                            }
                            &:hover{
                                cursor: pointer;
                            }
                        }
                        .el-icon-chat-dot-square:hover{
                            background-color: RGB(81,147,184);
                        }
                        .commentNumber{
                            margin-left: 10px;
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