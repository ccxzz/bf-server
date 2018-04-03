<template>
  <div class="login">
    <el-row class="login-header">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <img class="icon-logo" src="../assets/images/logo.png">
          <span class="text-logo">火电环保智能系统</span>
          <span class="login-line"></span>
          <span class="text-name">智能管理平台</span>
        </div>
      </el-col>
    </el-row>
    
    <el-row class="login-content" :style="{height:screenHeight + 'px'}">
      <el-col :span="6" :offset="16">
        <div class="grid-content bg-purple">
          <el-form class="login-content-form" ref="form" :model="form" :rules="rules" label-width="0">
            <div class="login-form-title" >修改密码</div>
            <el-form-item prop="uid">
              <el-input placeholder="请输入用户名" v-model="form.uid"></el-input>
            </el-form-item>
            <el-form-item prop="user_pwd_cur">
              <el-input placeholder="请输入旧密码" v-model="form.user_pwd_cur"></el-input>
            </el-form-item>
            <el-form-item prop="user_pwd_new">
              <el-input placeholder="请输入新密码" v-model="form.user_pwd_new"></el-input>
            </el-form-item>
            <el-form-item class="form-f-right form-bottom-ze">
              <router-link class="form-black" to="/">登录</router-link>
              <router-link class="form-green" to="/register">立即注册</router-link>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="form-sub-btn" @click="onSubmit('form')">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    
    <el-row class="login-footer">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <div class="address">Copyright© 2016 All right reserved.重庆智慧思特大数据有限公司</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'RePassword',
    data () {
      let validatePwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (!(/^[A-Za-z0-9]+$/.test(value))) {
          callback(new Error('密码只能为英文和数字组成'))
        } else {
          callback()
        }
      }
      return {
        screenHeight: document.documentElement.clientHeight - 90,
        form: {
          uid: '',
          user_pwd_cur: '',
          user_pwd_new: ''
        },
        rules: {
          uid: [
            { required: true, message: '请输入用户id', trigger: 'blur' }
          ],
          user_pwd_cur: [
            { validator: validatePwd, trigger: 'blur' },
            { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
          ],
          user_pwd_new: [
            { validator: validatePwd, trigger: 'blur' },
            { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    mounted () {
    },
    components: {},
    methods: {
      onSubmit: function (formName) {
        let self = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.axios.post(self.configData.testUrl + '/user/change_pwd', {
              uid: self.form.uid,
              user_pwd_cur: self.form.user_pwd_cur,
              user_pwd_new: self.form.user_pwd_new
            }).then(function (response) {
              if (response.data.is_success) {
                self.$message({
                  message: '修改密码成功',
                  type: 'success'
                })
                setTimeout(function () {
                  self.$router.push('/')
                }, 2000)
              } else {
                self.$message({
                  message: '修改密码失败',
                  type: 'error'
                })
              }
            }).catch(function (err) {
              console.log(err)
            })
          } else {
            self.$message({
              message: '提交失败！信息不完整',
              type: 'error'
            })
            return false
          }
        })
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .form-f-right{
    text-align: right;
  }
  .form-bottom-ze{
    margin-bottom: 0;
  }
  .form-black{
    color: #000;
  }
  .form-green{
    color: #008100;
  }
  .form-f-right a{
    text-decoration: none;
    cursor: pointer;
  }
  .login-header{
    text-align: left;
    padding-left: 100px;
  }
  .icon-logo{
    width: 70px;
    height: 70px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: inline-block;
    vertical-align: middle;
  }
  .text-logo{
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #008800;
    display: inline-block;
    vertical-align: middle;
  }
  .login-line{
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 30px;
    background-color: #bfbfbf;
    margin: 0 10px;
  }
  .text-name{
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #000;
    display: inline-block;
    vertical-align: middle;
  }
  .login-content-form{
    text-align: left;
    background-color: #fff;
    padding: 35px;
  }
  .login-content{
    background: url("../assets/images/login-bg.jpg") center no-repeat;
    background-size: 100%;
    padding: 50px 0;
  }
  .login-form-title{
    font-size: 22px;
    font-weight: bold;
    border-left: 5px solid orange;
    padding-left: 20px;
    position: relative;
    left: -35px;
    margin-bottom: 20px;
  }
  .form-sub-btn{
    width: 100%;
  }
  .login-footer{
    padding: 30px 0;
  }
</style>
