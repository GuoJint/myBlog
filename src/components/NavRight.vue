    <template>
    <div id="NavRight" class="right">
        <div class="r-box r-box-card1">
            <div>
                <i class="iconfont">&#xe645;</i>
            </div>
            <span @click="toEdit()">写文章</span>
            <div>
                <i class="iconfont">&#xe64f;</i>
            </div>
            <span>草稿箱</span>
            
        </div>
        <div class="r-box r-box-card2">
            <div>
                <i class="iconfont"></i>
                <span class="Vip" @click="toEdit()">创作者中心</span>
            </div>
            <div>
                <span class="openVip">去开通</span>
            </div>
            
            
        </div>
        <div class="r-box r-box-card3">
        <div class="card3-1">
            <div >
                <i class="livei iconfont">&#xe62e;</i>
                <span class="live">Live</span>
            </div>
            <div >
                <i class="booki iconfont">&#xe634;</i>
                <span class="book">书店</span>
            </div>
            <div >
                <i class="criclei iconfont">&#xe61b;</i>
                <span class="cricle">圆桌</span>
            </div>
            
            
            
        </div>
        <div class="card3-2">
            <div >
                <i class="zli iconfont">&#xe608;</i>
                <span class="zl">专栏</span>
            </div>
            <div >
                <i class="payMoneyi iconfont">&#xe60a;</i>
                <span class="payMoney">付费咨询</span>
            </div>
            <div >
                <i class="everythingi iconfont">&#xe691;</i>
                <span class="everything">百科</span>
            </div>
            
            
            
        </div>
        </div>
        <div class="r-box r-box-card4">
            <div>
                <i class="iconfont">&#xe60d;</i>
                <p>我的收藏</p>
            </div>
            <div>
                <i class="iconfont">&#xe613;</i>
                <p>我关注的问题</p>
            </div>
            <div>
                <i class="iconfont">&#xe65e;</i>
                <p>我的邀请</p>
            </div>
            <div>
                <i class="iconfont">&#xe654;</i>
                <p>我的余额</p>
            </div>
            <div>
                <i class="iconfont">&#xe60d;</i>
                <p>站务中心</p>
            </div>
            <div>
                <i class="iconfont">&#xe646;</i>
                <p>帮助中心</p>
            </div>
            <div>
                <i class="iconfont">&#xe60d;</i>
                <p>版权服务中心</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavRight",
        data() {
            return {};
        },
        methods:{
            toEdit(){
                this.$router.push('/editHome')
            },
        },
    };
</script>
    <style lang="scss">
    .right {
        position: fixed;
        top: 100px;
        right: 19%;
        margin-left: 750px;
        z-index: 100;
        
        width: 15%;
        max-width: 300px;
        min-width: 200px;
        .r-box {
            padding: 20px;
            margin: 20px 0 10px 5px;
            border: 1px solid #ebeef5;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            span {
            cursor: pointer;
            }
        }
        .r-box-card1 {
            div{
                display: block;
            }
            display: -webkit-flex;
            justify-content: space-around;
            align-items: center;
        }
        .r-box-card2 {
            display: -webkit-flex;
            justify-content: space-around;
            align-items: center;
            i{
                display: block;
            }
            .Vip {
                color: RGB(133, 144, 166);
                font-size: 14px;
            }
            .openVip {
                color: RGB(64, 158, 255);
                font-size: 14px;
            }
        }
        .r-box-card3 {
            display: -webkit-flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            i{
                display: block;
            }
            span {
                color: RGB(133, 144, 166);
                font-size: 15px;
            }
            .card3-1 {
                margin-bottom: 20px;
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .livei{
                    font-size: 30px;
                    color: RGB(255,207,0);
                }
                .live:hover {
                    color: RGB(255,207,0);
                }
                .booki{
                    width: 17px;
                    margin: 7px 6px;
                    color: green;
                }
                .book{
                    margin-top: 15px;
                }
                .book:hover {
                    color: green;
                }
                .criclei{
                    width: 17px;
                    font-size: 20px;
                    margin: 7px 6px;
                    color: RGB(0, 132, 255);
                }
                .cricle{
                    margin-left: 2px;
                }
                .cricle:hover {
                    color: RGB(0, 132, 255);
                }
            }
            .card3-2 {
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .zli{
                    width: 17px;
                    margin: 6px 6px;
                    color: RGB(255, 192, 0);
                }
                .zl:hover {
                    color: RGB(255, 192, 0);
                }
                .payMoneyi{
                    font-size: 20px;
                    width: 17px;
                    margin: 6px 22px;
                    color: RGB(107, 208, 137);
                }
                .payMoney:hover {
                    color: RGB(107, 208, 137);
                }
                .everythingi{
                    width: 17px;
                    font-size: 20px;
                    margin: 6px 4px;
                    color: RGB(88, 104, 209);
                }
                .everything:hover {
                    color: RGB(88, 104, 209);
                }
            }
        }
        .r-box-card4 {
            i{
                color: RGB(133, 144, 166);
                margin-right: 10px;
            }
            p {
                display: inline-block;
                font-size: 14px;
                color: RGB(133, 144, 166);
                margin-bottom: 10px;
            }
        }
    }
    </style>