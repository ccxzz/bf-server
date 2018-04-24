<template>
  <div class="container hongbaopkg" style="overflow-y:auto" :style="{height: changeScreenHeight - 50 + 'px'}">
    <el-row :gutter="20">
      <el-tabs v-model="activeName" @tab-click="tabClickEvent">
        <el-tab-pane label="设置抽奖信息" name="first">
          <el-row :gutter="20">
            <el-col>
              <el-form ref="form" :rules="rules" :model="form" label-width="130px">
                <el-form-item label="一等奖比例" prop="one_prize" style="width: 400px">
                  <el-input v-model="form.one_prize" placeholder="输入一等奖比例">
                    <template slot="append">%</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="二等奖比例" prop="two_prize" style="width: 400px">
                  <el-input v-model="form.two_prize" placeholder="输入二等奖比例">
                    <template slot="append">%</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="三等奖比例" prop="three_prize" style="width: 400px">
                  <el-input v-model="form.three_prize" placeholder="输入三等奖比例">
                    <template slot="append">%</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="四等奖比例" prop="four_prize" style="width: 400px">
                  <el-input v-model="form.four_prize" placeholder="输入四等奖比例">
                    <template slot="append">%</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="五等奖比例" prop="five_prize" style="width: 400px">
                  <el-input v-model="form.five_prize" placeholder="输入五等奖比例">
                    <template slot="append">%</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="冻结CPC个数" prop="dj_cpc" style="width: 400px">
                  <el-input v-model="form.dj_cpc" placeholder="输入购买一份需要需要冻结CPC个数">
                    <template slot="append">%</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="抽奖结束时间" prop="end_time" style="width: 400px">
                  <el-date-picker
                    v-model="form.end_time"
                    :picker-options="pickerOptions0"
                    type="datetime"
                    placeholder="选择结束时间">
                  </el-date-picker>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit('form')">确定</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="抽奖列表" name="second">
          <el-table
            :row-key="getRowKeys"
            :data="tableData5"
            ref="theTable"
            :expand-row-keys="expands"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="发放币种">
                    <el-select v-model="fafang_coin" placeholder="请选择">
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
                  <el-form-item label="发放个数">
                    <el-input v-model="fafang_count" placeholder="输入发放个数">
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" >确定</el-button>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="一等奖比例"
              prop="one_prize">
            </el-table-column>
            <el-table-column
              label="二等奖比例"
              prop="two_prize">
            </el-table-column>
            <el-table-column
              label="三等奖比例"
              prop="three_prize">
            </el-table-column>
            <el-table-column
              label="四等奖比例"
              prop="four_prize">
            </el-table-column>
            <el-table-column
              label="五等奖比例"
              prop="five_prize">
            </el-table-column>
            <el-table-column
              label="冻结CPC个数"
              prop="dj_cpc">
            </el-table-column>
            <el-table-column
              label="结束时间"
              prop="end_time">
            </el-table-column>
            <el-table-column
              label=""
            width="200">
              <template slot-scope="scope">
                <el-button
                  @click="expandTableRow(scope.row.id)"
                  size="mini">
                  发放奖励
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                >删除</el-button>
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
      var validatePass = (rule, value, callback) => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入整数'))
        } else {
          callback()
        }
      }
      return {
        tableData5: [{
          id: 0,
          one_prize: 1,
          two_prize: 10,
          three_prize: 30,
          four_prize: 0,
          five_prize: 0,
          dj_cpc: 100,
          end_time: '2018-4-24 10:00:00'
        }, {
          id: 1,
          one_prize: 1,
          two_prize: 10,
          three_prize: 30,
          four_prize: 0,
          five_prize: 0,
          dj_cpc: 100,
          end_time: '2018-4-24 10:00:00'
        }, {
          id: 2,
          one_prize: 1,
          two_prize: 10,
          three_prize: 30,
          four_prize: 0,
          five_prize: 0,
          dj_cpc: 100,
          end_time: '2018-4-24 10:00:00'
        }, {
          id: 3,
          one_prize: 1,
          two_prize: 10,
          three_prize: 30,
          four_prize: 0,
          five_prize: 0,
          dj_cpc: 100,
          end_time: '2018-4-24 10:00:00'
        }, {
          id: 4,
          one_prize: 1,
          two_prize: 10,
          three_prize: 30,
          four_prize: 0,
          five_prize: 0,
          dj_cpc: 100,
          end_time: '2018-4-24 10:00:00'
        }, {
          id: 5,
          one_prize: 1,
          two_prize: 10,
          three_prize: 30,
          four_prize: 0,
          five_prize: 0,
          dj_cpc: 100,
          end_time: '2018-4-24 10:00:00'
        }],
        expands: [],
        fafang_coin: 0,
        fafang_count: 0,
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
          one_prize: 0,
          two_prize: 0,
          three_prize: 0,
          four_prize: 0,
          five_prize: 0,
          dj_cpc: 0,
          end_time: new Date()
        },
        rules: {
          one_prize: [
            { validator: validatePass, trigger: 'blur' }
          ],
          two_prize: [
            { validator: validatePass, trigger: 'blur' }
          ],
          three_prize: [
            { validator: validatePass, trigger: 'blur' }
          ],
          four_prize: [
            { validator: validatePass, trigger: 'blur' }
          ],
          five_prize: [
            { validator: validatePass, trigger: 'blur' }
          ],
          dj_cpc: [
            { validator: validatePass, trigger: 'blur' }
          ],
          end_time: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        }
      }
    },
    mounted () {
      // let self = this
      this.getCoinList()
    },
    components: {},
    methods: {
      getRowKeys: function (row) {
        return row.id
      },
      expandTableRow: function (id) {
        let self = this
        if (self.$data.expands[0] === id) {
          self.$set(self.$data, 'expands', [])
        } else {
          self.$set(self.$data, 'expands', [id])
        }
      },
      tabClickEvent: function (tab, event) {
        let self = this
        if (self.$data.activeName === 'second') {
        }
      },
      onSubmit: function (formName) {
        // let self = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
          } else {
          }
        })
      },
      getCoinList: function () {
        let self = this
        self.axios.get('http://47.89.11.149:8887/api/coin/info').then(function (response) {
          if (response.data.code === 200) {
            self.$set(self.$data, 'coinData', response.data.body)
            self.$set(self.$data, 'fafang_coin', response.data.body[0].id)
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
