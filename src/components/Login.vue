<template>
  <div class="login">
    <el-row class="login-header">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <img class="icon-logo" src="../assets/images/coinpay-logo.png">
          <span class="text-logo">币付在线</span>
          <span class="login-line"></span>
          <span class="text-name">智能管理平台</span>
        </div>
      </el-col>
    </el-row>

    <el-row class="login-content" :style="{height:screenHeight + 'px'}">
      <el-col :span="6" :offset="16">
        <div class="grid-content bg-purple">
          <el-form class="login-content-form" ref="form" :model="form" :rules="rules" label-width="0">
            <div class="login-form-title" >用户登录</div>
            <el-form-item>
              <el-input placeholder="请输入账号" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请输入密码" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item class="form-f-right form-bottom-ze">
              <!--<router-link class="form-black" to="/repassword">忘记密码？</router-link>-->
              <!--<router-link class="form-green" to="/register">立即注册</router-link>-->
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="form-sub-btn" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <el-row class="login-footer">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <div class="address">CopyRight© 2017-2018 币付在线版权所有 All Rights Reserved.</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        screenHeight: document.documentElement.clientHeight - 90,
        form: {
          username: '',
          password: ''
        },
        rules: {
        }
      }
    },
    mounted () {
      sessionStorage.removeItem('access_token')
      sessionStorage.removeItem('uid')
    },
    components: {},
    methods: {
      onSubmit: function () {
        let self = this
        self.axios.post('http://47.89.11.149:8887/admin/auth/login', {
          'username': this.form.username,
          'password': this.form.password
        }).then(function (response) {
          if (response.data.code === 200) {
            sessionStorage.setItem('access_token', response.data.body.token)
            sessionStorage.setItem('adminId', response.data.body.adminId)
            self.$router.push('./index/page')
          } else {
            self.$message({
              message: '账号或密码错误',
              type: 'error'
            })
          }
        }).catch(function (err) {
          console.log(err)
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
    background: #ededed;
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
