<template>
    <div class="login" id="loginH">
        <div :class="amt" class="container" >
            <div class="user singinBx">
                <div class="imgBx"><img src="../assets/img/img105.jpg" alt=""></div>
                <div class="formBx">
                    <h2 class="login-title">SING IN</h2>
                    <el-form v-model="ruleForm" ref="ruleForm"  label-width="60px">
                        <el-form-item prop="acount" class="container-item">
                            <el-input v-model="ruleForm.acount" autocomplete="off" placeholder="Account">

                            </el-input>
                        </el-form-item >
                        <el-form-item prop="userPassword" class="container-item">
                            <el-input v-model="ruleForm.userPassword" autocomplete="off" placeholder="Password">
                                
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="myLogin" type="primary" @click="submitForm('ruleForm')">
                                Sing In
                            </el-button>
                        </el-form-item>
                    </el-form>
                    <p class="signup">Don't have an account ?<a href="#" @click="changeAmt">Sign Up</a></p>
                </div>
            </div>
            <div class="user singupBx">
                <div class="formBx">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  label-width="80px" >
                        <el-form-item  prop="accountReg">
                            <el-input v-model="ruleForm.accountReg" placeholder="Create Account">

                            </el-input>
                        </el-form-item >
                        <el-form-item  prop="userPasswordReg" >
                            <el-input type="password" v-model="ruleForm.userPasswordReg" placeholder="Create Password">
                                
                            </el-input>
                        </el-form-item>
                        <el-form-item  prop="confirmPSW" >
                            <el-input type="password"  v-model="ruleForm.confirmPSW" placeholder="Confirm Password">
                                
                            </el-input>
                        </el-form-item>
                        <el-form-item  prop="phone">
                            <el-input v-model="ruleForm.phone" placeholder="Your Phone">
                                
                            </el-input>
                        </el-form-item>
                        <el-form-item  prop="verificationCode" class="verificationCode">
                            <el-input v-model="ruleForm.verificationCode" class="verificationCode-count" placeholder="Phone Code">
                                
                            </el-input>
                            <el-button class="code" type="primary" plain :disabled=codeFlag @click="sendCode">{{time}}</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="reg" type="primary" @click="submitFormReg('ruleForm')">
                                Sign Up
                            </el-button>
                        </el-form-item>
                    </el-form>
                    <p class="signup">Already have an account ?<a href="#"  @click="changeAmt">Sign In</a></p>
                </div>
                <div class="imgBx"><img src="../assets/img/img2.jpg" alt=""></div>
            </div>
        </div>
    </div>
    
</template>

<script>
import {loginReuqest} from '../api/login.js'
import {sendCodeRequest , registerRequest} from '../api/register'
export default {
    name: 'login',
    data() { 
        var checkAcount = (rule,value,callback)=>{
            let acountReg = /[`~!@#$%^&*()_\-+=<>?:"{}|/, .;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/
            if(acountReg.test(value)){
                callback(new Error('不能包含特殊字符'))
            }else{
                callback()
            }
        }
        var checkPass = (rule,value,callback)=>{
            let userPasswordReg = this.ruleForm.userPasswordReg
            if(userPasswordReg!==value){
                callback(new Error("两次密码不一致"))
            }else{
                callback()
            }
        }
        var checkPhone = (rule,value,callback)=>{
            return this.judgeCode(value,callback)
        }
        return {
            time:'Get Code',
            codeFlag:false,
            amt:'',
            ruleForm:{
                acount:'',
                userPassword:'',
                accountReg:'',
                userPasswordReg:'',
                confirmPSW:'',
                phone:'',
                verificationCode:''
                
            },
            rules:{
                account:[
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min:5 ,max:15 , message: '账号必须在5至10之间' ,trigger:'blur'},
                    { validator:checkAcount ,trigger:'blur'}
                ],
                userPassword:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min:5 ,max:10 , message: '密码必须在5至10之间' ,trigger:'blur'}
                ],
                confirmPSW:[
                    { required: true, message: '请确认密码', trigger: 'blur' },
                    { validator:checkPass , trigger:'blur'}
                ],
                phone:[
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { validator: checkPhone , trigger:'blur'}
                ],
                verificationCode:[
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 0 , max: 4 , trigger:'blur'}
                ],
            }
        }
    },
    mounted(){
        this.screenHeight()
    },
    methods:{
        changeAmt(){
            if(this.amt == ""){
                this.amt = 'active'
            }else{
                this.amt = ''
            }
        },
        screenHeight(){
            var h =  document.documentElement.clientHeight;
            var loginH = document.getElementById('loginH')
            loginH.style.height= `${h}px`
        },
        sendCode(){
            let flag = this.judgeCode(this.ruleForm.phone)
            // console.log(flag)
            if(flag){
                sendCodeRequest({
                    phone:this.ruleForm.phone
                }).then((res)=>{
                    this.$message({
                        message:res.data.message,
                        type:'success'
                    })
                    this.time = 60
                    this.codeFlag = true
                    let timeCount = setInterval(()=>{
                        if(this.time<=0){
                            this.time = "Get Code"
                            this.codeFlag = false
                            clearInterval(timeCount)
                            return
                        }
                        this.time -= 1
                    },100)
                })
            }else{
                this.$message.error("请输入正确的手机格式")
            }
            
        },
        judgeCode(value,callback){
            let phoneReg = /^1[3456789]\d{9}$/
            if(!phoneReg.test(value)){
                
                if(callback){
                    callback(new Error("请输入正确的手机格式"))
                }else{
                    return false
                }
            }else{
                if(callback){
                    callback()
                }else{
                    return true
                }
            }
        },
        submitFormReg(formName){
            this.$refs[formName].validate((valid)=>{
                if(valid){
                    registerRequest({
                        acount:this.ruleForm.account,
                        userPassword:this.ruleForm.userPassword,
                        phone:this.ruleForm.phone,
                        code:this.ruleForm.verificationCode
                    }).then((res)=>{
                        this.$message({
                            message:res.data.message,
                            type:'success'
                        })
                        this.$router.push('/login')
                    }).catch((err)=>{
                        this.$message.error(err.data.message)
                    })
                }
            })
        },
        submitForm(){
            if(this.ruleForm.acount||this.ruleForm.userPassword){
                loginReuqest({
                    username:this.acount,
                    userPassword:this.userPassword
                }).then(res=>{
                    // console.log(res)
                    this.$cookies.set('token',res.data.token,'30s')
                    this.$router.push('/articleShow')
                }).catch(err=>{
                    this.$message(err)
                })
            }else{
                this.$message({
                    message:'请输入账号或密码',
                    type:'warning'
                })
            }
            
        },
        
    }
}
</script>
<style lang="scss">
.login{
    position: relative;
    background-color: RGB(45,48,121);
    background-image: linear-gradient(125deg,#93b5cf,#5cb3cc,#2e317c);
    background-size: 400%;
    animation: bganimation 15s infinite;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .container{
        width: 800px;
        height: 500px;
        position: relative;
        background-color: #fff;
        box-shadow: 0 15px 50px rgba(0,0,0,0.1);
        // transform: translateY(-50%);
        overflow: hidden;
        .user{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            .imgBx{
                position: relative;
                width: 50%;
                height: 100%;
                background: #ff0;
                transition: 0.5s;
                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    object-fit: cover;
                    width: 400px;
                    height: 500px;
                }
            }
            .formBx{
                position: relative;
                width: 50%;
                height: 100%;
                background: #fff;
                display: flex;
                justify-content:center;
                align-items: center;
                flex-direction: column;
                // padding: 0 40px;
                transition: 0.5s;
                .signup{
                    position: relative;
                    margin-top: 20px;
                    font-size: 12px;
                    letter-spacing: 1px;
                    color: #555;
                    text-transform: uppercase;
                    font-weight: 300;
                    a{
                        font-weight: 600;
                        text-decoration: none;
                        color: #677eff;
                    }
                }
                
                
            }
        }
        .singupBx{
            pointer-events: none;
            .formBx{
                left: 100%;
                .el-form{
                    width: 80%;
                    .el-form-item__content{
                        margin-left: 0 !important;
                    }
                    .verificationCode-count{
                        width: 45%;
                    }
                    .code{
                        margin: 0 0 0 20px;
                    }
                    .reg{
                        width: 100%;
                        background-image: linear-gradient(90deg,#93b5cf,#5cb3cc,#2e317c);
                        background-size: 200%;
                        animation: bganimation 15s infinite;
                    }
                }
            }
            .imgBx{
                left: -100%;
            }
        }
        .singinBx{
            pointer-events: initial;
            .formBx{
                left: 0;
                .login-title{
                    font-weight: 600;
                    font-size: 18px;
                    color: #5d655f;
                    margin-bottom: 30px;
                }
                .el-form{
                    // margin-left: -30px;
                    width: 60%;
                    .el-form-item__content{
                        margin-left: 0 !important;
                    }
                    .myLogin{
                        width: 100%;
                        background-image: linear-gradient(90deg,#93b5cf,#5cb3cc,#2e317c);
                        background-size: 200%;
                        animation: bganimation 15s infinite;
                    }
                    .el-form-item__content{
                        margin-left:110px;
                    }
                }
            }
            .imgBx{
                left: 0;
            }
        }
        // .el-form-item{
        //     width: 100%;
        // }
    }
    .active{
        .singupBx{
            pointer-events: initial;
            .formBx{
                left: 0;
            }
            .imgBx{
            left: 0;
            }
        }
    }
    .active{
        .singinBx{
            pointer-events: none;
            .formBx{
                left: 100%;
            }
            .imgBx{
                left: -100%;
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