<template>
    <div class="register" id="loginH">
        <el-form :model="ruleForm" ref="ruleForm" class="container" label-width="80px">
            <el-form-item label="账号" porp="account">
                <el-input :model="ruleForm.account">

                </el-input>
            </el-form-item >
            <el-form-item label="密码" prop="password">
                <el-input :model="ruleForm.password">
                    
                </el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPSW">
                <el-input :model="ruleForm.confirmPSW">
                    
                </el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input :model="ruleForm.phone">
                    
                </el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verificationCode" class="verificationCode">
                <el-input :model="ruleForm.verificationCode" class="verificationCode-count">
                    
                </el-input>
                <span class="count">45</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">
                    注册
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'register',
    data() { 
        return {
            ruleForm:{
                account:'',
                password:'',
                confirmPSW:'',
                phone:'',
                verificationCode:''
            }
        }
    },
    mounted(){
        this.screenHeight()
    },
    methods:{
        screenHeight(){
            var h =  document.documentElement.clientHeight;
            var loginH = document.getElementById('loginH')
            loginH.style.height= `${h}px`
        },
    }
}
</script>

<style lang="scss">
.register{
    .container{
        width: 20%;
        position: relative;
        top: 50%;
        left: 0;
        margin: 0 auto;
        transform: translateY(-50%);
        .el-form-item{
            width: 100%;
        }
        .verificationCode{
            .verificationCode-count{
                width: 50%;
            }
            .count{
                display: inline-block;
                border: 1px solid blue;
                border-radius: 20px;
                width: 40%;
                margin-left: 5%;
                text-align: center;
                line-height: 40px;
            }
        }
    }
}
</style>