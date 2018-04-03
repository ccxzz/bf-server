<template>
  <div class="container hongbaopkg" style="overflow-y:auto" :style="{height: changeScreenHeight - 50 + 'px'}">
    <el-row :gutter="20">
      <el-tabs v-model="activeName" @tab-click="tabClickEvent">
        <el-tab-pane label="设置红包" name="first">
          <el-row :gutter="20">
            <el-col>
              <el-form ref="form" :rules="rules" :model="form" label-width="130px">
                <el-form-item label="奖励币种类型">
                  <el-select v-model="form.bounty_coin_id" placeholder="请选择">
                    <el-option
                      v-for="item in coinData"
                      :key="item.id"
                      :label="item.title+item.name.toUpperCase()"
                      :value="item.id">
                      <img class="select-img" :src="item.img">
                      <span style="display: inline-block;vertical-align: middle;color: #8492a6; font-size: 13px" class="select-text">{{ item.title}}({{ item.name.toUpperCase()}})</span>
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="奖励币总数量" prop="bounty_coin_num" style="width: 400px">
                  <el-input v-model="form.bounty_coin_num" placeholder="输入奖励币总数量"></el-input>
                </el-form-item>
                <el-form-item label="红包总个数" prop="packet_num" style="width: 400px">
                  <el-input v-model="form.packet_num" placeholder="输入红包总个数"></el-input>
                </el-form-item>
                <el-form-item label="单个红包币量" prop="packet_type">
                  <el-radio-group v-model="form.packet_type">
                    <el-radio value="0" label="0">随机红包</el-radio>
                    <el-radio value="1" label="1">固定红包</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="限制币种类型">
                  <el-select v-model="form.cond_coin_id" placeholder="请选择">
                    <el-option value="0" label="不限制"></el-option>
                    <el-option
                      v-for="item in coinData"
                      :key="item.id"
                      :label="item.title+item.name.toUpperCase()"
                      :value="item.id">
                      <img class="select-img" :src="item.img">
                      <span style="display: inline-block;vertical-align: middle;color: #8492a6; font-size: 13px" class="select-text">{{ item.title}}({{ item.name.toUpperCase()}})</span>
                    </el-option>
                  </el-select>
                  <el-input style="width: 250px" v-model="form.cond_coin_num" placeholder="输入币种最低交易额度"></el-input>
                </el-form-item>
                <el-form-item label="限定CPC最低交易额度" style="width: 400px">
                  <el-input v-model="form.cond_cpc_num" placeholder="输入CPC最低交易额度"></el-input>
                </el-form-item>
                <el-form-item label="活动时间">
                  <el-col :span="6">
                    <el-form-item prop="start_dt">
                      <el-date-picker :picker-options="pickerOptions0" type="datetime" placeholder="选择开始日期" v-model="form.start_dt" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="1">-</el-col>
                  <el-col :span="6">
                    <el-form-item prop="end_dt">
                      <el-date-picker :picker-options="pickerOptions1" type="datetime" placeholder="选择结束日期" v-model="form.end_dt" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="红包状态">
                  <el-switch v-model="form.state"></el-switch>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit('form')">确定</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="红包记录" name="second">
          <el-table
            :data="tableData"
            stripe
            :default-sort = "{prop: 'start_dt', order: 'descending'}"
            style="width: 100%">
            <el-table-column
              prop="bounty_coin_name"
              label="奖励币种名称"
              width="">
            </el-table-column>
            <!--<el-table-column-->
              <!--prop="bounty_coin_id"-->
              <!--label="币种ID"-->
              <!--width="">-->
            <!--</el-table-column>-->
            <el-table-column
              prop="bounty_coin_num"
              width=""
              label="单个红包币量">
            </el-table-column>
            <el-table-column
              prop="packet_num"
              width=""
              label="红包总金额">
            </el-table-column>
            <el-table-column
              prop="packet_num_left"
              width=""
              label="红包剩余金额">
            </el-table-column>
            <el-table-column
              prop="packet_type"
              width=""
              label="红包类型">
            </el-table-column>
            <!--<el-table-column-->
              <!--prop="cond_coin_id"-->
              <!--width=""-->
              <!--label="限制币种ID">-->
            <!--</el-table-column>-->
            <el-table-column
              prop="cond_coin_name"
              width=""
              label="限制币种名称">
            </el-table-column>
            <el-table-column
              prop="cond_coin_num"
              width=""
              label="币种交易限额">
            </el-table-column>
            <el-table-column
              prop="cond_cpc_num"
              width=""
              label="CPC交易限额">
            </el-table-column>
            <el-table-column
              prop="start_dt"
              width=""
              sortable
              label="开始时间">
              <template slot-scope="scope">
                <span>{{new Date(scope.row.start_dt * 1000).getFullYear() + '-' + parseInt(new Date(scope.row.start_dt * 1000).getMonth() + 1) +
                  '-' + new Date(scope.row.start_dt * 1000).getDate() + ' ' + new Date(scope.row.start_dt * 1000).getHours() + ':' +
                  new Date(scope.row.start_dt * 1000).getMinutes() + ':' + new Date(scope.row.start_dt * 1000).getSeconds()}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop=""
              width=""
              label="结束时间">
              <template slot-scope="scope">
                <span>{{new Date(scope.row.end_dt * 1000).getFullYear() + '-' + parseInt(new Date(scope.row.end_dt * 1000).getMonth() + 1) +
                  '-' + new Date(scope.row.end_dt * 1000).getDate() + ' ' + new Date(scope.row.end_dt * 1000).getHours() + ':' +
                  new Date(scope.row.end_dt * 1000).getMinutes() + ':' + new Date(scope.row.end_dt * 1000).getSeconds()}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态">
            </el-table-column>
            <el-table-column
              prop=""
              label="操作"
            width="200">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="changeHongbaoState(scope.row.id, scope.row.state)">
                  <span  v-if="scope.row.state">关闭</span>
                  <span  v-else>开启</span>
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteHongbaoState(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'ContentBox',
    computed: {
      chooseColor () {
        return this.$store.state.chooseColor
      },
      chooseLeftMenu () {
        return this.$store.state.chooseLeftMenu
      },
      changeScreenHeight () {
        return this.$store.state.screenHeight
      },
      setLeftMenuIsHidden () {
        return this.$store.state.leftMenuIsHidden
      }
    },
    data () {
      return {
        tableData: [],
        pickerOptions1: {
          disabledDate: (time) => {
            return time.getTime() < (this.form.start_dt.getTime() - 24 * 60 * 60 * 1000)
          }
        },
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        coinData: [],
        activeName: 'first',
        form: {
          bounty_coin_id: '',
          bounty_coin_num: '',
          packet_num: '',
          packet_type: '',
          cond_coin_id: '',
          cond_coin_num: '',
          cond_cpc_num: '',
          state: true,
          start_dt: new Date(),
          end_dt: new Date()
        },
        rules: {
          bounty_coin_id: [
            {required: true, message: '请选择奖励币种类型', trigger: 'change'}
          ],
          bounty_coin_num: [
            {required: true, message: '请输入奖励币总数量', trigger: 'blur'}
          ],
          packet_num: [
            {required: true, message: '请输红包总金额', trigger: 'blur'}
          ],
          packet_type: [
            {required: true, message: '请选择单个红包币量', trigger: 'change'}
          ],
          cond_coin_id: [
            {required: true, message: '请选择限制币种类型', trigger: 'change'}
          ],
          cond_coin_num: [
            {required: true, message: '请输入币种最低交易额度', trigger: 'blur'}
          ],
          cond_cpc_num: [
            {required: true, message: '请输入CPC最低交易额度', trigger: 'blur'}
          ],
          start_dt: [
            {type: 'date', required: true, message: '请选择活动开始时间', trigger: 'change'}
          ],
          end_dt: [
            {type: 'date', required: true, message: '请选择活动结束时间', trigger: 'change'}
          ]
        }
      }
    },
    mounted () {
      let self = this
      this.getCoinList()
      self.$set(self.$data.form, 'cond_coin_id', '0')
      self.$set(self.$data.form, 'packet_type', '0')
      self.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      self.axios.defaults.headers.common['token'] = sessionStorage.getItem('access_token')
      self.axios.defaults.headers.common['adminId'] = sessionStorage.getItem('adminId')
    },
    components: {},
    methods: {
      tabClickEvent: function (tab, event) {
        let self = this
        if (self.$data.activeName === 'second') {
          self.getHongBaoList()
        }
      },
      onSubmit: function (formName) {
        let self = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.setCoinList()
          } else {
          }
        })
      },
      setCoinList: function () {
        let self = this
        self.axios.post('http://47.89.11.149:8887/admin/red-packet/', {
          bounty_coin_id: self.$data.form.bounty_coin_id,
          bounty_coin_num: self.$data.form.bounty_coin_num,
          packet_num: self.$data.form.packet_num,
          packet_type: self.$data.form.packet_type,
          cond_coin_id: self.$data.form.cond_coin_id,
          cond_coin_num: self.$data.form.cond_coin_num,
          cond_cpc_num: self.$data.form.cond_cpc_num,
          state: self.$data.form.state ? 1 : 0,
          start_dt: parseInt(new Date(self.$data.form.start_dt).getTime() / 1000),
          end_dt: parseInt(new Date(self.$data.form.end_dt).getTime() / 1000)
        }).then(function (response) {
          if (response.data.code === 200) {
            self.$message({
              message: '红包创建成功',
              type: 'success'
            })
          } else {
            self.$message({
              message: response.data.message,
              type: 'error'
            })
          }
        }).catch(function (err) {
          console.log(err)
        })
      },
      getCoinList: function () {
        let self = this
        self.axios.get('http://47.89.11.149:8887/api/coin/info').then(function (response) {
          if (response.data.code === 200) {
            self.$set(self.$data, 'coinData', response.data.body)
            self.$set(self.$data.form, 'bounty_coin_id', response.data.body[0].id)
          } else {
          }
        }).catch(function (err) {
          console.log(err)
        })
      },
      deleteHongbaoState: function (id) {
        let self = this
        self.axios.delete('http://47.89.11.149:8887/admin/red-packet/' + id).then(function (response) {
          if (response.data.code === 200) {
            self.getHongBaoList()
            self.$message({
              message: '成功',
              type: 'success'
            })
          } else {
          }
        }).catch(function (err) {
          console.log(err)
        })
      },
      changeHongbaoState: function (id, state) {
        let self = this
        let changeState = state === 0 ? 1 : 0
        self.axios.put('http://47.89.11.149:8887/admin/red-packet/' + id, {
          'state': changeState
        }).then(function (response) {
          if (response.data.code === 200) {
            self.$message({
              message: '成功',
              type: 'success'
            })
            self.getHongBaoList()
          } else {
          }
        }).catch(function (err) {
          console.log(err)
        })
      },
      getHongBaoList: function () {
        let self = this
        self.axios.get('http://47.89.11.149:8887/admin/red-packet/list').then(function (response) {
          if (response.data.code === 200) {
            self.$set(self.$data, 'tableData', response.data.body)
          } else {
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
  .container{
    flex-grow: 1;
    padding: 25px;
    text-align: left;
  }
  .select-img{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
</style>
<style>
  .hongbaopkg .el-input{
    margin-bottom: 10px;
  }
  .hongbaopkg .el-input__inner{
    /*width: 250px;*/
  }
</style>
