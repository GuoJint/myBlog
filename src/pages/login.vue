<template>
    <div class="login" id="loginH">
        <el-form :model="ruleForm" ref="ruleForm" class="container" label-width="60px">
            <el-form-item label="账号" prop="acount" class="container-item">
                <el-input :model="ruleForm.acount">

                </el-input>
            </el-form-item >
            <el-form-item label="密码" prop="password" class="container-item">
                <el-input :model="ruleForm.password">
                    
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() { 
        return {
            ruleForm:{
                acount:'',
                password:'',
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
        submitForm(){
            
        }
    }
}
</script>
<style lang="scss">
.login{
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
    }
}
</style>