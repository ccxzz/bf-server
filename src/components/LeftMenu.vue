<template>
  <div class="left-menu" :class="[chooseColor.name, {is_shown:setLeftMenuIsHidden}]" style="overflow-y: auto;" :style="{height: changeScreenHeight + 'px'}">
    <div class="left-menu-title">
      <i class="el-icon-menu"></i>
      <span>{{this.LeftMenuData.LeftMenu[this.chooseLeftMenu].title}}</span>
      <!--<span @click="setLeftMenuHidden" :style="{backgroundColor: chooseColor.bgColors}" class="collapse_btn">-->
        <!--<icon name="caret-left"></icon>-->
      <!--</span>-->
    </div>
    <el-row class="tac">
      <el-col>
        <el-menu
          class="custom-el-menu"
          @select="handleOpen"
          :collapse="false">
          <menuList v-for="item in LeftMenuData.LeftMenu[this.chooseLeftMenu].children" :key="item.id" :MenuItemData="item"></menuList>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Icon from '../../node_modules/vue-awesome/components/Icon'
  Vue.component('menuList', {
    props: ['MenuItemData'],
    template: '<el-submenu v-if="MenuItemData.children" :index="JSON.stringify(MenuItemData)"> ' +
    '<template slot="title"> ' +
    '<i class="el-icon-location left-icon"></i> ' +
    '<span>{{MenuItemData.title}}</span> ' +
    '</template> ' +
    '<menuList v-for="item in MenuItemData.children" :key="item.id" :MenuItemData="item"></menuList>' +
    '</el-submenu>' +
    '<el-menu-item v-else :index="JSON.stringify(MenuItemData)"> ' +
    '<i class="el-icon-menu left-icon"></i> ' +
    '<span slot="title">{{MenuItemData.title}}</span> ' +
    '</el-menu-item>'
  })
  export default {
    name: 'LeftMenu',
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
        LeftMenuData: {
          LeftMenu: [
            {
              'children': [
                {
                  'id': 1,
                  'title': '抢红包'
                },
                {
                  'id': 2,
                  'title': '抽奖'
                }
              ],
              'id': 0,
              'title': '活动'
            }
          ]
        }
      }
    },
    beforeCreate: function () {
    },
    mounted () {
      // let self = this
      window.onresize = () => {
        return (() => {
          if (!this.timer) {
            this.$store.commit('changeScreenHeight', (document.documentElement.clientHeight - 70))
            this.timer = true
            let self = this
            setTimeout(function () {
              self.timer = false
            }, 100)
          }
        })()
      }
    },
    components: {
      Icon
    },
    methods: {
      handleOpen (key, keyPath) {
        let self = this
        let data = JSON.parse(key)
        let editTabData = {
          title: data.title,
          id: data.id,
          href: data.href,
          type: 'add'
        }
        self.$store.commit('changeEditableTabs', editTabData)

        switch (data.id) {
          case 1:
            self.$router.push('/index/page')
            break
          default:
            self.$router.push('/index/choujiang')
            break
        }
      },
      getMenu: function () {
      },
      setLeftMenuHidden: function () {
        // let self = this
        // self.$store.commit('setLeftMenuIsHidden', true)
      }
    },
    watch: {
    }
  }
</script>

<style scoped>
  .left-menu {
    text-align: left;
    width: 220px;
    height: auto;
    border-right: 1px solid #c8c8c8;
  }
  .left-menu-title{
    font-size: 16px;
    padding: 12px 20px 12px;
  }
  .left-menu-title span, .left-menu-title i{
    display: inline-block;
    vertical-align: middle;
  }
  .left-menu-title i{
    font-size: 22px;
  }
  .is_shown{
    display: none;
  }
  .collapse_btn{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    position: relative;
    right: -75px;
  }
  .collapse_btn .fa-icon{
    color: #fff;
    margin-left: 6px;
    margin-top: 2px;
  }
</style>
<style>
  .custom-el-menu .el-menu-item, .el-submenu__title{
    height: 50px;
    line-height: 50px;
  }
  .custom-el-menu{
    border-right: none;
  }
</style>
