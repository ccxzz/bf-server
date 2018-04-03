<template>
  <div class="header" :class="[chooseColor.name]">
    <el-row>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <img class="icon-logo" src="../assets/images/coinpay-logo.png">
          <span class="text-logo">币付在线</span>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="grid-content bg-purple-light">
          <ul class="menu-list">
            <li class="menu-item" :class="{active: index == HeaderData.currentItem}" v-for="(item, index) in HeaderData.HeaderMenu"
                :data-id="item.id"
                :data-pid="item.pid"
                v-on:click="checkItem(index, item.title, item.id, item.href)">
              <i class="el-icon-menu"></i>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :offset="15" :span="4">
        <div class="grid-content bg-purple">
          <DropMenu :DropMenuData="HeaderData.DropMenuData"></DropMenu>
          <SkinMenu></SkinMenu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import DropMenu from './DropMenu.vue'
  import SkinMenu from './SkinMenu.vue'
  export default {
    name: 'HeaderTop',
    computed: {
      chooseColor () {
        return this.$store.state.chooseColor
      }
    },
    data () {
      return {
        HeaderData: {
          HeaderMenu: '',
          currentItem: 0,
          DropMenuData: [
            // {
            //   'value': '用户信息',
            //   // 'href': '/index/page/usermsg',
            //   'name': 'user'
            // },
            // {
            //   'value': '部门信息',
            //   // 'href': '/index/page/departmentmsg',
            //   'name': 'list-ul'
            // },
            // {
            //   'value': '修改密码',
            //   'href': '/repassword',
            //   'name': 'unlock-alt'
            // },
            {
              'value': '退出',
              'href': '/',
              'name': 'trash'
            }
          ]
        }
      }
    },
    mounted () {
      let self = this
      self.getMenu()
    },
    components: {
      DropMenu,
      SkinMenu
    },
    methods: {
      handleCommand: function (command) {
      },
      handleSelect: function (command) {
      },
      getMenu: function () {
      },
      checkItem: function (index, title, id, href) {
        this.HeaderData.currentItem = index
        let editTabData = {
          title: title,
          id: id,
          href: href,
          type: 'replace'
        }
        this.$store.commit('chooseLeftMenu', index)
        this.$store.commit('changeEditableTabs', editTabData)
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .header{
    position: relative;
  }
  .header::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    display: block;
  }
  .icon-logo{
    width: 50px;
    height: 50px;
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
    color: #fff;
    display: inline-block;
    vertical-align: middle;
  }
  .menu-list{
    overflow: hidden;
  }
  .menu-item{
    position: relative;
    cursor: pointer;
    display: inline-block;
    height: 50px;
    padding: 10px;
    color: #fff;
    font-size: 14px;
    float: left;
  }
  .menu-item i{
    font-size: 28px;
  }
  .active{
  }
  .active::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    display: block;
    z-index: 2;
  }
</style>
