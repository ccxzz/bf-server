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
    
    <el-row class="login-content" :style="{'min-height':screenHeight + 'px'}">
      <el-col :span="20" :offset="2">
        <div class="grid-content bg-purple">
          <el-form class="login-content-form" ref="form" :model="form" :rules="rules" label-width="120px">
            <div class="login-form-title">注册</div>
            <div class="form-input-box">
              <el-form-item label="用户名" prop="user_name">
                <el-input placeholder="请输入用户名" v-model="form.user_name"></el-input>
              </el-form-item>
              <el-form-item label="真实姓名" prop="real_name">
                <el-input placeholder="请输入真实姓名" v-model="form.real_name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input placeholder="请输入密码" type="password" v-model="form.pwd"></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="mobile_no">
                <el-input placeholder="请输入手机号码" v-model="form.mobile_no"></el-input>
              </el-form-item>
              <el-form-item label="职位" prop="position_text">
                <el-input placeholder="请输入职位" v-model="form.position_text"></el-input>
              </el-form-item>
              <el-form-item label="专长ID" prop="expert_acks">
                <el-input placeholder="请输入专长ID" v-model="form.expert_acks"></el-input>
              </el-form-item>
              <el-form-item label="部门" prop="dep_name">
                <el-input :disabled="inputIsDisabled" @blur="inputIsDisabled = false" @focus="dialogVisible = true; inputIsDisabled = true" placeholder="选择部门" v-model="form.dep_name"></el-input>
              </el-form-item>
              <el-form-item label="角色ID" prop="role_ids">
                <el-select multiple  v-model="form.role_ids" placeholder="请选择角色ID">
                  <el-option v-for="item in roleListData" :key="item.id" :label="item.role_name" :value="item.id.toString()"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否专家" prop="is_expert">
                <el-select v-model="form.is_expert" placeholder="请选择是否专家">
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="负责电厂列表" prop="plant_list">
                <el-select multiple v-model="form.plant_list" placeholder="请选择负责电厂列表">
                  <el-option label="鲁阳" value="shanghai"></el-option>
                  <el-option label="二郎" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否启用" prop="state">
                <el-select v-model="form.state" placeholder="请选择是否启用">
                  <el-option label="启用" value="1"></el-option>
                  <el-option label="禁用" value="0"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <el-form-item class="form-f-right form-bottom-ze">
              <router-link class="form-black" to="/repassword">忘记密码？</router-link>
              <router-link class="form-green" to="/">登录</router-link>
            </el-form-item>
            <el-form-item class="form-f-right">
              <el-button type="primary" class="form-sub-btn" @click="onSubmit('form')">注册</el-button>
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
  
    <el-dialog
      title="重庆智慧思特大数据有限公司"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-tree class="departmentTree"
        :props="treeData"
        accordion
        @node-click="handleNodeClick"
        :load="handleNodeLoad"
        lazy
        :render-content="renderContents"
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: 'Register',
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
      let validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号码'))
        } else if (!(/^1[345678]\d{9}$/.test(value))) {
          callback(new Error('请输入正确的手机号码'))
        } else {
          callback()
        }
      }
      let validateRole = (rule, value, callback) => {
        if (this.form.role_ids.length <= 0) {
          callback(new Error('至少选择一个角色ID'))
        } else {
          callback()
        }
      }
      let validatePlant = (rule, value, callback) => {
        if (this.form.plant_list.length <= 0) {
          callback(new Error('至少选择一个电厂'))
        } else {
          callback()
        }
      }
      let validateDepart = (rule, value, callback) => {
        if (!this.form.dep_id) {
          callback(new Error('请选择部门'))
        } else {
          callback()
        }
      }
      return {
        dialogVisible: false,
        inputIsDisabled: false,
        screenHeight: document.documentElement.clientHeight - 90,
        departmentData: '',
        roleListData: '',
        treeData: {
          id: 'id',
          pid: 'pid',
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        form: {
          user_name: '',
          real_name: '',
          pwd: '',
          mobile_no: '',
          position_text: '',
          dep_id: '',
          dep_name: '',
          role_ids: '',
          is_expert: '',
          expert_acks: '',
          plant_list: '',
          state: ''
        },
        rules: {
          user_name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          real_name: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' }
          ],
          pwd: [
            { required: true, validator: validatePwd, trigger: 'blur' },
            { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
          ],
          mobile_no: [
            { required: true, validator: validatePhone, trigger: 'blur' }
          ],
          position_text: [
            { required: true, message: '请输入职位', trigger: 'blur' }
          ],
          dep_name: [
            { required: true, validator: validateDepart, trigger: 'change' }
          ],
          role_ids: [
            { required: true, validator: validateRole, trigger: 'change' }
          ],
          is_expert: [
            { required: true, message: '请选择是否专家', trigger: 'change' }
          ],
          expert_acks: [
            { required: true, message: '请输入专长ID', trigger: 'blur' }
          ],
          plant_list: [
            { required: true, validator: validatePlant, trigger: 'change' }
          ],
          state: [
            { required: true, message: '请选择是否启用', trigger: 'change' }
          ]
        }
      }
    },
    mounted () {
      let self = this
      self.getDepartmentData()
      self.getRoleListData()
    },
    components: {},
    methods: {
      getRoleListData: function () {
        let self = this
        self.axios.get(self.configData.testUrl + '/role/list').then(function (response) {
          if (response.data.is_success) {
            if (response.data.is_success) {
              self.roleListData = response.data.data
            }
          } else {
            self.$message({
              message: '获取角色信息失败',
              type: 'error'
            })
          }
        }).catch(function (err) {
          console.log(err)
        })
      },
      getDepartmentData: function () {
        let self = this
        self.axios.get(self.configData.testUrl + '/dep/info').then(function (response) {
          if (response.data.is_success) {
            if (response.data.is_success) {
              self.departmentData = response.data.data
              self.releaseDepData(response.data.data, 0)
            }
          } else {
            self.$message({
              message: '获取部门信息失败',
              type: 'error'
            })
          }
        }).catch(function (err) {
          console.log(err)
        })
      },
      releaseDepData: function (data, pid) {
        let self = this
        let releaseArr = []
        for (let i = 0, n = data.length; i < n; i++) {
          let releaseItemData = {}
          if (data[i].pid === pid) {
            releaseItemData.id = data[i].id
            releaseItemData.pid = data[i].pid
            releaseItemData.label = data[i].dep_name
            releaseArr.push(releaseItemData)
          }
        }
        self.treeData = releaseArr
      },
      onSubmit: function (formName) {
        let self = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.axios.post(self.configData.testUrl + '/user/register', {
              'user_name': this.form.user_name,
              'real_name': this.form.real_name,
              'pwd': this.form.pwd,
              'mobile_no': this.form.mobile_no,
              'position_text': this.form.position_text,
              'dep_id': this.form.dep_id,
              'role_ids': this.form.role_ids,
              'is_expert': this.form.is_expert,
              'expert_acks': this.form.expert_acks,
              'plant_list': this.form.plant_list,
              'state': this.form.state
            }).then(function (response) {
              if (response.data.is_success) {
                self.$message({
                  message: '注册成功',
                  type: 'success'
                })
                setTimeout(function () {
                  self.$router.push('/')
                }, 2000)
              } else {
                self.$message({
                  message: '注册失败',
                  type: 'error'
                })
              }
            }).catch(function (err) {
              console.log(err)
            })
          } else {
            self.$message({
              message: '提交失败！注册信息不完整',
              type: 'error'
            })
            return false
          }
        })
      },
      handleClose: function (done) {
        done()
      },
      handleNodeClick: function (data) {
        let self = this
        if (data.id !== 0) {
          self.form.dep_id = data.id
          self.form.dep_name = data.name
        }
      },
      handleNodeLoad: function (node, resolve) {
        let self = this
        if (node.level === 0) {
          return resolve([{ name: '重庆智慧斯特大数据有限公司', 'id': 0 }])
        }
        let nodeId = node.data.id
        let releaseArr = []
        for (let i = 0, n = self.departmentData.length; i < n; i++) {
          let releaseItemData = {}
          if (self.departmentData[i].pid === nodeId) {
            releaseItemData.id = self.departmentData[i].id
            releaseItemData.pid = self.departmentData[i].pid
            releaseItemData.name = self.departmentData[i].dep_name
            releaseArr.push(releaseItemData)
          }
        }
        setTimeout(() => {
          const data = releaseArr
          resolve(data)
        }, 100)
      },
      renderContents: function (h, { node, data, store }) {
        return this.$createElement(
          'span',
          {},
          [
            this.$createElement(
              'icon',
              {
                class: {treeLabelIcon: true},
                attrs: {
                  name: 'user'
                }
              }
            ),
            this.$createElement(
              'span',
              {
                class: {treeLabelText: true}
              },
              node.data.name
            )
          ]
        )
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .form-input-box .el-form-item{
    display: inline-block;
    width: 350px;
  }
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
    width: 110px;
  }
  .login-footer{
    padding: 30px 0;
  }
  .departmentTree{
    max-height: 200px;
    overflow-y: auto;
  }
  .treeLabelIcon, .treeLabelText{
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
</style>
